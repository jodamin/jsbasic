console.log("video 27");

//score: Gioi, Kha, Trung binh

const score = 8;
switch (true) {

    case (score >= 8 && score <= 10):
        console.log('Gioi');
        break;

    case (score >= 6 && score < 8):
        console.log('Kha');
        break;

    case (score >= 4 && score < 6):
        console.log('Trung binh');
        break;

    default:
        console.log('Yeu');
        break;
}