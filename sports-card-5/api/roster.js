export default async function handler(request, res) {

    const roster = [
      {
          "image": "https://milb.bamcontent.com/assets/images/6/3/8/176535638/cuts/Ken_Griffey_6k31bgls_sjlwtau1.jpg",
          "name": "Ken Griffey",
          "info": "Information: ",
          "top": "Ken"
      }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(roster);
  }