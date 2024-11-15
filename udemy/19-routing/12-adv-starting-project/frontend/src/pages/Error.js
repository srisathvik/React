import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
import {useRouteError} from 'react-router-dom'
export default function Error() {

    const error = useRouteError();
    let title = 'An error Occured!';
    let message = 'some thing went wrong';
    if(error.status === 500){
        message = JSON.parse(error.data).message;
    }
    if(error.status === 404){
        title = 'Not found!';
        message = 'could not find resource or page.'
    }
    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
            <p>{message}</p>
            </PageContent>
        </>
   
    )
}