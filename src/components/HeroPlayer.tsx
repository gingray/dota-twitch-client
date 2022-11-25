export const HeroPlayer = ({heroPlayer}: {heroPlayer:any}) => {

    const heroImage = heroPlayer.Hero.HeroName.toLowerCase().replaceAll(" ", "_") + '_vert.png'
    return (
        <>
            <img alt={heroPlayer.Hero.HeroName} width={42} height={60} src={process.env.PUBLIC_URL + `/images/heroes/${heroImage}`}/>
        </>
    )
}