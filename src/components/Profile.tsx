import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';

import styles from '../styles/components/Profile.module.css';

export function Profile(){

    const {level} = useContext(ChallengeContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://i.ibb.co/KbB3fzY/62178655.jpg" alt="Paloma V."/>
            <div>
                <strong>Paloma V </strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}