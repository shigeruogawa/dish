"use server";

// import type { timelineCookParam } from '@/type';
import { type cooksResponse } from '@/type';
import Image from 'next/image';


// type props = { params: timelineCookParam };

// function makeIndexPage

console.log('dispatch');

async function fetchCooks() {

    const res: cooksResponse[] | null = await fetch('http://localhost:3000/api/cook').then(
        (res) => {
            return res.json();
        }
    ).catch(() => 'error');

    console.log('fetchCooks');
    console.log(res);

    return res;
}

export default async function Page() {

    // const isIndex: boolean = params.hasOwnProperty('cookId');

    let data: cooksResponse[] | null = null;
    data = await fetchCooks();

    console.log(data);

    return (
        <div>
            {
                (data !== null) ? data!.map(cook => {
                    return (
                        <div key={cook.id}>
                            <h3>{cook.name}</h3>
                            <Image
                                src={`https://shigeruogawa.github.io/picture/next/${cook.file}.jpg`}
                                alt="No Image..."
                                width={500}
                                height={300} />
                        </div>
                    );
                }) : (
                    <p>Now Loading...</p>
                )
            }

        </div>
    );
};
