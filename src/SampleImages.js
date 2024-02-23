import './sampleImages.css';

const Data = [
    {
        "image": "https://www.tata.com/content/dam/tata/images/about-us/Desktop/heritage/ratan-tata/ratan_tata_banner_desktop_1920x1080.jpg",
        "title": "Ratan Naval Tata",
        "subtitle": "Industrialist",
    
    },
    {
        "image": "https://themeghalayan.com/wp-content/uploads/2022/05/AR_Rahman_Thumb_2200x1200-2.jpg",
        "title": "Allah Rakha Rahman",
        "subtitle": "Music Composer",
    
    },
    {
        "image": "https://www.jagranimages.com/images/newimg/23042023/23_04_2023-sachin_world_cup_trophy_23393532.webp",
        "title": "Sachin Tendulkar",
        "subtitle": "Cricketer",
    },
    {
        "image": "https://images.moneycontrol.com/static-mcnews/2023/07/APJ-Abdul-Kalam-770x433.png?impolicy=website&width=770&height=431",
        "title": "A. P. J. Abdul Kalam",
        "subtitle": "Aerospace Scientist ",
    }
]

  
const SampleImages=()=>{
    return(
      <div className="GreatPeopleImg">
                    <div className="Title"><p>Great Indian Personalities</p>
                    <span><div className='underline'></div></span>
                    </div>
        <div className="ImageGallery">

           {Data.map((item, index) => (
        
          <div className="ImageCard">
          <div className="DisaplyImage">
            <img src={item.image}></img></div>
      <div className="cbody">
          <p>{item.title}</p>
          <span>{item.subtitle}</span>
      </div>
      </div>

      ))}

        </div>
        </div>
        )
    
}
export default SampleImages;
