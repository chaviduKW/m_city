import { useEffect, useReducer, useState } from 'react';
import { showErrorToast } from '../Utils/tools';

import { CircularProgress } from '@mui/material'
import { matchesCollection } from '../../firebase';

import LeagueTable from './tables';
import MatchesList from './matchesList';
import { getDocs, DocumentData } from 'firebase/firestore';

const TheMatches = () => {

    const [matches, setMatches] = useState<DocumentData[] | null>(null);

    useEffect(() => {

        if (!matches) {
            getDocs(matchesCollection).then(snapshot => {
                const matches = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setMatches(matches);
            }).catch(error => {
                showErrorToast(error)
            })

        }
    }, [matches]);

    console.log(matches)

    return (
        <>
            {matches ?
                <div className="the_matches_container">
                    <div className="the_matches_wrapper">
                        <div className="left">
                            list
                        </div>
                        <div className="right">
                            <LeagueTable/>
                        </div>
                    </div>
                </div>
            :
                <div className="progress">
                    <CircularProgress />
                </div>
            }
        </>
    )
}

export default TheMatches