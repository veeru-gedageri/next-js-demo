import { useRouter } from 'next/router'

function Docs(){
    const router = useRouter()
    const { params = []} = router.query
    console.log(params)

    if (params.length === 2) {
        return(
            <h1>
                Feature {params[0]} and Concept {params[1]}
            </h1>
        )
    } else if(params.length === 1){
        return <h1> Docs {params[0]} </h1>
    }
    return <h1>Docs Home</h1>
}

export default Docs