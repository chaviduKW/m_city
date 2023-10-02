type playerCardProps = {
    number:string
    name:string
    lastname:string 
    bck:string
}

const PlayerCard = ({number,name,lastname,bck}:playerCardProps) =>{
    return (
        <div className="player_card_wrapper">
            <div
                className="player_card_thmb"
                style={{background:`#f2f9ff url(${bck})`}}
            >
            </div>
            <div className="player_card_nfo">
                <div className="player_card_number">
                    {number}
                </div>
                <div className="player_card_name">
                    <span>{name}</span>
                    <span>{lastname}</span>
                </div>
            </div>
        </div>
    )
}

export default PlayerCard