//function1
const HamTinhDTB = (toan, van, anh) => {
    if (toan === 0 || van === 0 || anh === 0) {
        return 0;
    } else {
        return (toan + van + anh) / 3;
    };
};

//function2
const HamXepLoai = (diemTrungBinh) => {
    switch (true) {
        case (diemTrungBinh >= 8 && diemTrungBinh < 9):
            return "Gioi";
        case (diemTrungBinh >= 6.5 && diemTrungBinh < 8):
            return "Kha";
        case (diemTrungBinh === 0):
            return "Can cai thien diem";
        default:
            return "Trung binh";
    }
};

//thuchien
const toan = 0;
const van = 8;
const anh = 7;
const DiemTrungBinh = HamTinhDTB(toan, van, anh);
const XepLoai = HamXepLoai(DiemTrungBinh);
console.log(`
    Diem trung binh: ${DiemTrungBinh}
    Xep loai: ${XepLoai}
    `)
