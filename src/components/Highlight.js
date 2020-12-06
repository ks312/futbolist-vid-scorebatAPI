import HighlightItem from './HighlightItem';

const Highlight = ({highlight}) => {
    return(
        <div className="list-highlights my-4">
            {highlight.map((highlights)=> (
                <HighlightItem highlights={highlights} />
            ))}

        </div>
        )
    }
    
    export default Highlight;
                