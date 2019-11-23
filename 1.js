function getBiodata(){
  let objBiodata = 
    {
      "name"    : "Kurniawan Hidayat",
    	"age"     : 22,
    	"address" : "Kp. Jati RT. 02 RW. 08, Desa Cangkuang, Kec. Leles, Kab. Garut",
      "hobbies" : 
        [
      		"Belajar bahasa",
      		"Nonton Film Anime",
      	],

    	"is_married"  : false,

    	"list_school" : 
        [
      		{
            "name"    :"MA YPI BAITURRAHMAN LELES",
      			"year_in" : 2012,
      			"year_out": 2015,
      			"major"   : "IPS"
      		},
      		
      		{
            "name"    :"SMP Negeri 1 LELES",
      			"year_in" : 2009,
      			"year_out": 2012,
      			"major"   : null
      		}
      	],
    	"skills" : 
        [
          {
      			"skill_name": "html",
      			"level"     : "beginner"
      		},
      		{
      			"skill_name": "css",
      			"level"     : "beginner"
      		},
      		{
      			"skill_name": "php",
      			"level"     : "beginner"
      		},
      		{
      			"skill_name": "mySql",
      			"level"     : "beginner"
      		}
      	],   
    	"interest_in_coding": true
    }
  return objBiodata;
}
console.log(JSON.stringify(getBiodata()));