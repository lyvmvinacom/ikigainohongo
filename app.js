(()=>{const data={
class:['Lớp học IKIGAI','Trung tâm học từ vựng, ngữ pháp và Kanji. Đây sẽ là nơi học viên rèn luyện kiến thức mỗi ngày.'],
arena:['Đấu trường IKIGAI','Sân thi đấu kiến thức. Định hướng phát triển các trận 1v1 và 2v2 về từ vựng, ngữ pháp và Kanji.'],
n4:['Phòng luyện thi N4','Khu ôn luyện N4 gồm từ vựng, ngữ pháp, Kanji, đọc hiểu và nghe hiểu.'],
n5:['Phòng luyện thi N5','Khu ôn luyện N5 theo từng kỹ năng, có bài tập và bài kiểm tra theo chủ đề.'],
jft:['Phòng luyện thi JFT','Khu luyện thi JFT-Basic A2 với bài luyện tập và thi thử.'],
gym:['Phòng Gym – Anh Thường','Khu rèn luyện thể lực và thực hiện thử thách vận động cùng huấn luyện viên Anh Thường.'],
tea:['Phòng Anh Tùng','Góc trà yên tĩnh với bàn trà và ấm trà. Anh Tùng luôn chào: “Uống trà với anh nhé”.']
};
const panel=document.getElementById('placePanel'),name=document.getElementById('placeName'),desc=document.getElementById('placeDesc'),toast=document.getElementById('toast');
document.querySelectorAll('.hotspot').forEach(el=>el.addEventListener('click',()=>{const d=data[el.dataset.place];name.textContent=d[0];desc.textContent=d[1];panel.hidden=false}));
document.getElementById('closePanel').onclick=()=>panel.hidden=true;
document.getElementById('visitBtn').onclick=()=>{panel.hidden=true;toast.textContent='Bản đồ IKIGAI đã sẵn sàng. Nội dung bên trong từng khu vực sẽ được phát triển ở giai đoạn tiếp theo.';toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2600)};
})();