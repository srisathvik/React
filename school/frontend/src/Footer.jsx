export default function Footer(){
    return(
        <div>
            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; {new Date().getFullYear()} Copyright:{' Vitana Private Limited'}
            </div>
        </div>
    )
}