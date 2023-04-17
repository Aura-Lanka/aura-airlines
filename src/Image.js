export default function Image(props){
    return (
        <>
        <article className="shadow-md bg-white rounded-3xl p-5">
            <img 
            src={props.urls.full} 
            alt={props.user.name} 
            loading="lazy" 
            className="d-block w-100"
            />

        </article>
        </>
    )
}