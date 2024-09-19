import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Icons(props){
        const socialType = props.socialType;
        let urllink = "";
        
        switch (socialType) {
            case "linkedin":
                urllink = "https://www.linkedin.com/in/veliskova/";
            
            case "strava":
                urllink = "https://www.strava.com/athletes/31763755";

            case "github":
                urllink = "https://github.com/jananananana/";
            
            case "instagram":
                urllink = "https://www.instagram.com/mouflonlove/";
     
            default:
                break;
        }
  
        return (
            <span className={'j-icon j-icon__'+ socialType}>
                {
                    <a className='j-button--plain' href={urllink}>
                        <FontAwesomeIcon icon={'fa-brands fa-'+ socialType} />
                    </a>
                }
            </span>
        )
           
            

}


