import { useRouteLoaderData, redirect } from "react-router-dom"
import EventItem from '../components/EventItem';

function EventDetail() {
    const data = useRouteLoaderData('event-detail');
    return(
        <EventItem event={data.event} />
    )
}

export default EventDetail;

export async function loader({request, params}) {
    const id = params.id;
    // console.log(id);
    const response = await fetch('http://localhost:8080/events/' + id);

    if(!response.ok){
        throw new Response(JSON.stringify({message: 'could not fetch details for selected events.'},{
            status: 500
        })
    )}
    else{
        return response;
    }
}

export async function action({params, request}) {
    const eventId = params.id;
    console.log(eventId);
    const response = await fetch('http://localhost:8080/events/' + eventId,{
        method: request.method,
    });
    if(!response.ok){
        throw new Response(JSON.stringify({message: 'could not delete the event.'},{
            status: 500
        })
    )}
    else{
        return redirect('/events');
    }

}
// export default function EventDetail() {
//     const params = useParams();
//     return (
//         <>
//             <h1>Event Detail Page</h1>  
//             <p>Event Id: {params.id}</p>
//         </>
    
// )
// }