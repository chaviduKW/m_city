import { useState, useEffect } from 'react'
import { Slide } from 'react-awesome-reveal';
import { matchesCollection } from '../../../firebase';
import { getDocs,DocumentData } from "firebase/firestore";
import MatchesBlock from '../../Utils/matches_block';

const Blocks = () => {
    const [matches, setMatches] = useState<DocumentData[]>([]);

    useEffect(() => {
        if (!(matches.length > 0)) {
            const queryPromise = getDocs(matchesCollection);
            queryPromise
                .then((snapshot) => {
                    const matches = snapshot.docs.map(doc=>({
                        id:doc.id,
                        ...doc.data()
                    }));
                    
                    setMatches(matches)
                    console.log(matches)
                })
                .catch((error) => {
                    console.error("Error fetching documents: ", error);
                });

        }
    }, [matches])
    
    const showMatches = (matches:DocumentData) =>(
        matches?
            matches.map((match:DocumentData)=>(
                <Slide  key={match.id} className='item' triggerOnce>
                    <div>
                        <div className="wrapper">
                            <MatchesBlock match={match}/>
                        </div>
                    </div>
                </Slide>
            ))
        :
        null
    )

    return (
        <div className='home_matches'>
            {showMatches(matches)}

        </div>
    )
}

export default Blocks;