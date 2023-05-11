import {Experience } from "../typings";

export const fetchSocials = async () =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);

    const data = await res.json();
    const experience: Experience[] = data.experiences;

    return experience;

}