"use client"
import React, { useEffect, useState } from 'react'
import MeetingTimeDateSelection from '../_components/MeetingTimeDateSelection'
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { app } from '@/config/FirebaseConfig';

function SharedMeetingEvent({params}) {
    const db=getFirestore(app);
    const [businessInfo,setBusinesInfo]=useState();
    const [eventInfo,setEventInfo]=useState();
    const [loading,setLoading]=useState(false)
    useEffect(() => {
        if (params) {
            // Assuming params.business is "Team%20Shark"
            const businessName = decodeURIComponent(params.business);
            console.log(businessName); // This should log "Team Shark"
            getMeetingBusinessAndEventDetails(businessName);
        } else {
            console.error('Params are undefined');
        }
    }, [params]);
    
    const getMeetingBusinessAndEventDetails = async (businessName) => {
        setLoading(true);
        console.log(businessName); // Ensure this is "Team Shark"
        const q = query(collection(db, 'Business'), where('businessName', '==', businessName));
        const docSnap = await getDocs(q);
        console.log(docSnap.docs);
        docSnap.forEach((doc) => {
            console.log(doc.data());
            setBusinesInfo(doc.data());
        });
    
        // Adjusted to use businessName for fetching
        const docRef = doc(db, 'MeetingEvent', params?.meetingEventId);
        const result = await getDoc(docRef);
        console.log(result.data());
        setEventInfo(result.data());
    
        setLoading(false);
    };
    

  return (
    <div>

        
        <MeetingTimeDateSelection eventInfo={eventInfo}
        businessInfo={businessInfo} />
    </div>
  )
}

export default SharedMeetingEvent