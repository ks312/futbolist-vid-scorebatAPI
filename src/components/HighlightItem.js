import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import{Link} from 'react-router-dom'

const HighlightItem = ({highlights: {title, thumbnail, url}}) => {
    return(
        <Card body className="text-center">
            
            <Image src={thumbnail} rounded className="image my-2"  />
            <h3>{title} </h3>
            <div>
            <Link to={`/highlightDetail/${title}`}>
                <Button src={url} variant="primary my-2">Watch</Button>
            </Link>
            </div>

        </Card>
    )
}

export default HighlightItem;
