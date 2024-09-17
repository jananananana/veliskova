import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Icons(props){
        const socialType = props.socialType;
        
  
        return (
            <span className={'j-icon j-icon__'+ socialType}>
                {
                    <FontAwesomeIcon icon="fa-brands fa-strava" />
                }
            </span>
        )
           
            

}


