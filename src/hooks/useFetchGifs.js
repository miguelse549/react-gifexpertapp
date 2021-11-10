import { useEffect, useState } from "react"
import { getGifs } from "../Helper/getGifs";

export const useFetchGifs = (category) => {

    const [state, setstate] = useState({

        data: [],
        loading: true

    });

    useEffect(() => {

        getGifs(category)
            .then(img => {
                console.log(img)
                setstate({
                    data: img,
                    loading: false
                })
            })

    }, [category])

    // useEffect(() => {
    //     getGifs(category)
    //         .then(setimages);
    // }, [category])



    return state; //{data:[] ,loading:true};
}