import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';

inquirer
  .prompt([
    { message: 'ENTER URL: ', name: 'URL' }
  ])
  .then((answers) => {
    const url = answers.URL;

    const qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile('URL.txt', url, (err) => {
      if (err) throw err;
      console.log('QR code generated and saved as qr_img.png and URL.txt');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log('Prompt couldn\'t be rendered in the current environment.');
    } else {
      console.log('Something went wrong:', error);
    }
  });
