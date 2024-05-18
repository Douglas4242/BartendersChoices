import React, { useState } from 'react'
import style from './Specialties.module.css'
import Card from '../elements/Card'
import ButtonA from '../elements/ButtonA'
import SpeCard from '../elements/SpeCard'

const Specialties = () => {


    const expertsCoquetelaria = [
        {
            name: "Maria Oliveira",
            photo: "https://www.shutterstock.com/image-photo/young-asian-woman-professional-entrepreneur-600nw-2127014192.jpg",
            email: "maria@email.com.br",
            number: "(11)91234-5678",
            text: "Especialista em coquetéis clássicos, com 10 anos de experiência em bares renomados. Apaixonada por coquetelaria histórica e tradicional, Maria tem um vasto conhecimento sobre os clássicos da coquetelaria e sabe como prepará-los com perfeição para qualquer ocasião. Maria gosta de criar novas experiências para os clientes, incorporando sua paixão pela história dos coquetéis em cada drink que prepara."
        },
        {
            name: "Pedro Santos",
            photo: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            email: "pedrosantos@emmail.com",
            number: "(11)91234-5678",
            text: "Bartender premiado, reconhecido por sua habilidade em preparar coquetéis clássicos de forma criativa e inovadora. Com 8 anos de experiência, Pedro é conhecido por sua técnica impecável e sua paixão por reviver os coquetéis icônicos do passado. Ele tem um talento especial para personalizar os clássicos de acordo com as preferências individuais dos clientes, criando experiências únicas em cada drink"
        },
        {
            name: "Carla Mendes",
            photo: "https://media.istockphoto.com/id/1326417865/es/foto/retrato-de-una-joven-feliz.jpg?s=612x612&w=0&k=20&c=FxufwepLJCHfnsvAK2ijfwBqwhADECfuydZKTHdyAak=",
            email: "carlam@emmail.com",
            number: "(11)91234-5678",
            text: "Com 15 anos de experiência, Carla é uma verdadeira especialista em coquetelaria clássica. Ela tem um profundo conhecimento sobre os ingredientes e técnicas necessários para preparar coquetéis autênticos e memoráveis. Carla é conhecida por sua atenção aos detalhes e sua capacidade de surpreender os clientes com sabores e aromas excepcionais em cada drink."
        },
        {
            name: "Lucas Almeida",
            photo: "https://t4.ftcdn.net/jpg/04/70/16/05/360_F_470160573_2WEoo1TnS6so7zSjAAIKtjDIRTfY1kno.jpg",
            email: "lameida@emmail.com",
            number: "(11)91234-5678",
            text: "Bartender apaixonado pela história por trás de cada coquetel clássico, Lucas tem 7 anos de experiência em bares de prestígio. Ele se dedica a aprimorar suas habilidades constantemente, buscando sempre aperfeiçoar suas técnicas e descobrir novas receitas. Lucas é conhecido por sua personalidade cativante e sua capacidade de contar histórias fascinantes sobre a origem de cada coquetel que prepara."
        },
        {
            name: "Ana Santos",
            photo: "https://st2.depositphotos.com/3258807/7705/i/450/depositphotos_77056001-stock-photo-female-bartender-at-work.jpg",
            email: "anasts@emmail.com",
            number: "(11)91234-5678",
            text: "Especialista em coquetelaria clássica com um toque contemporâneo, Ana combina sua paixão pela tradição com uma abordagem inovadora na preparação de coquetéis. Com 9 anos de experiência, ela é reconhecida por sua criatividade e habilidade em reinventar os clássicos de forma única e surpreendente. Ana adora experimentar novos ingredientes e técnicas para criar coquetéis que encantam os clientes e os transportam para outras épocas."
        }
    ]

    const experstMixologia = [
        {
            name: "Gabriel Silva",
            photo: "https://twistbartendingservice.com/wp-content/uploads/2019/03/hire-male-bartender.jpg",
            email: "gabriel@email.com.br",
            number: "(11)91234-5678",
            text: "Com 8 anos de experiência em mixologia molecular, Gabriel é conhecido por suas criações ousadas e inovadoras. Ele adora desafiar as expectativas dos clientes, utilizando técnicas como sferificação, espumas e gelatinas para criar coquetéis que são verdadeiras obras de arte gastronômica. Gabriel é apaixonado por explorar novos ingredientes e experimentar combinações incomuns para oferecer experiências sensoriais únicas aos seus clientes."
        },
        {
            name: "Mariana Costa",
            photo: "https://t3.ftcdn.net/jpg/03/11/35/26/360_F_311352688_VN03yxn7arcnW5lQw1QgZrdYn1bnkbB6.jpg",
            email: "marina@email.com.br",
            number: "(11)91234-5678",
            text: "Especialista em mixologia molecular com 6 anos de experiência, Mariana é reconhecida por sua abordagem criativa e sua habilidade em transformar ingredientes comuns em coquetéis extraordinários. Ela tem um talento especial para combinar sabores e texturas de forma inovadora, criando experiências sensoriais que surpreendem e encantam os clientes. Mariana está sempre em busca de novas técnicas e inspirações para continuar elevando o padrão da mixologia molecular."
        },
        {
            name: "Renato Oliveira",
            photo: "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia24738/profissional-barman-cursos-cpt.jpg",
            email: "renato@email.com.br",
            number: "(11)91234-5678",
            text: "Bartender experiente com 10 anos dedicados à mixologia molecular, Renato é conhecido por sua paixão pela ciência por trás dos coquetéis. Ele combina sua formação em química com sua criatividade artística para criar coquetéis que desafiam as convenções e estimulam os sentidos. Renato é um verdadeiro alquimista da mixologia, sempre experimentando novas combinações e técnicas para criar coquetéis que são verdadeiras experiências de outro mundo"
        },
        {
            name: "Patrícia Fernandes",
            photo: "https://i1.wp.com/www.curiositymag.com/wp-content/uploads/2019/03/Maria-Varamo_Curiosity-1.jpeg?fit=2000%2C2667&ssl=1",
            email: "patricia@email.com.br",
            number: "(11)91234-5678",
            text: "Apaixonada por experimentação e inovação, Patrícia tem 7 anos de experiência em mixologia molecular. Ela adora brincar com texturas, temperaturas e sabores para criar coquetéis que são verdadeiras surpresas para os sentidos. Patrícia está sempre buscando inspiração em diferentes áreas, desde a gastronomia até a ciência, para criar coquetéis que são únicos e memoráveis para seus clientes."
        },
    ]

    const experstWhisky = [
        {
            name: "Rafael Oliveira",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4mkucaiGjPwfbCbBfbvu9jyB0q4mKGEBSqzXWG4W_CA&s",
            email: "rafa@email.com.br",
            number: "(11)91234-5678",
            text: "Com 12 anos de experiência em bar de whisky, Rafael é reconhecido por sua paixão e conhecimento profundo sobre essa bebida. Ele oferece degustações personalizadas, compartilhando histórias fascinantes sobre os diferentes tipos e origens de whisky. Rafael é conhecido por sua habilidade em recomendar whiskies que correspondam aos gostos individuais de seus clientes, proporcionando uma experiência verdadeiramente única."
        },
        {
            name: "Carolina Santos",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA1n0f5TBQs-Fr0wHYGJIEmcjKK54IoiWjppUtDGFZNA&s",
            email: "carol@email.com.br",
            number: "(11)91234-5678",
            text: "Especialista em whisky escocês, com 8 anos de experiência em bares renomados. Carolina é conhecida por sua habilidade em identificar e destacar as nuances de cada whisky, oferecendo uma experiência de degustação que é educativa e envolvente. Ela está sempre atualizada sobre as últimas tendências e lançamentos no mundo do whisky, garantindo que seus clientes tenham acesso aos melhores e mais exclusivos rótulos disponíveis."
        },
        {
            name: "André Mendonça",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx0Cbj5wyyJNUUGL4RIA5jKPx2UVrdlqgWLvi1zP7mjA&s",
            email: "andre@email.com.br",
            number: "(11)91234-5678",
            text: "Bartender apaixonado por whisky, André tem 10 anos de experiência em bar de whisky. Ele é especializado em criar coquetéis que realçam os sabores complexos e ricos do whisky, oferecendo uma experiência única para os amantes da bebida. André está sempre em busca de novas maneiras de surpreender e impressionar seus clientes, seja com combinações inusitadas de ingredientes ou técnicas de preparo criativas."
        },
        {
            name: "Camila Oliveira",
            photo: "https://brisbanebartenders.com/wp-content/uploads/2019/03/imageedit_525_6275115728-min.jpg",
            email: "camila@email.com.br",
            number: "(11)91234-5678",
            text: "Com 6 anos de experiência em bar de whisky, Camila é conhecida por sua abordagem acessível e acolhedora ao servir whisky. Ela está sempre disposta a compartilhar seu conhecimento e entusiasmo pela bebida, ajudando os clientes a explorar e descobrir novos rótulos. Camila acredita que o whisky é uma bebida para ser apreciada e desfrutada, e seu objetivo é tornar a experiência de seus clientes o mais memorável possível."
        },
        {
            name: "Guilherme Almeida",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrv6MJrbtYSOlV4dOj35cR_GB3ddYVsHzGH1FzFpL2hQ&s",
            email: "guilherme@email.com.br",
            number: "(11)91234-5678",
            text: "Especialista em whisky americano, com 9 anos de experiência em bar de whisky. Guilherme é reconhecido por sua paixão pela cultura e tradição por trás do whisky, oferecendo aos clientes uma verdadeira imersão no mundo da destilação e envelhecimento da bebida. Ele é hábil em identificar as características únicas de cada whisky e em sugerir combinações de sabores que complementam e realçam a experiência de degustação."
        },

    ]

    const experstSAlcool = [
        {
            name: "Laura Mendes",
            photo: "https://hivelife.com/wp-content/uploads/2019/08/Amanda-Wan_Hive-Life_Asia_The-Envoy_2.jpg",
            email: "laura@email.com.br",
            number: "(11)91234-5678",
            text: "Com 7 anos de experiência na preparação de coquetéis sem álcool, Laura é conhecida por sua criatividade e habilidade em criar bebidas refrescantes e saborosas. Ela utiliza uma variedade de sucos frescos, xaropes artesanais e ingredientes aromáticos para produzir coquetéis sem álcool que são tão complexos e deliciosos quanto seus equivalentes alcoólicos. Laura se dedica a proporcionar experiências memoráveis aos seus clientes, garantindo que todos possam desfrutar de uma bebida de alta qualidade, independentemente de suas preferências."
        },
        {
            name: "Rodrigo Santos",
            photo: "https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2024/01/Elena_Alex-Mesquita_Credito-Tomas-Rangel-e1706472195909.jpg?w=1024?w=146&h=82",
            email: "rodrigo@email.com.br",
            number: "(11)91234-5678",
            text: "Especialista em coquetéis sem álcool, Rodrigo tem 9 anos de experiência na criação de bebidas que são uma verdadeira explosão de sabor. Ele é conhecido por sua habilidade em equilibrar ingredientes e sabores para produzir coquetéis sem álcool que são refrescantes, complexos e extremamente agradáveis ao paladar. Rodrigo está sempre em busca de novas inspirações e ingredientes para oferecer aos seus clientes uma experiência única e memorável."
        },
        {
            name: "Juliana Costa",
            photo: "https://www.azcentral.com/gcdn/presto/2022/03/01/PPHX/4e768d30-71c6-4737-8c70-25b567c03b68-pb210127_1235.JPG?width=700&height=464&fit=crop&format=pjpg&auto=webp",
            email: "ju@email.com.br",
            number: "(11)91234-5678",
            text: "Com 5 anos de experiência em coquetéis sem álcool, Juliana é apaixonada por oferecer opções criativas e saborosas para seus clientes que optam por não consumir álcool. Ela é especializada em criar bebidas que são tanto bonitas quanto deliciosas, utilizando uma variedade de ingredientes frescos e coloridos para produzir coquetéis sem álcool que são verdadeiras obras de arte. Juliana está comprometida em proporcionar uma experiência excepcional a todos os seus clientes, independentemente de suas preferências de consumo."
        },
    ]

    const experstPersonalizado = [
        {
            name: "Mateus Oliveira",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY31xdqSKjPJQJ1kgSVM9NkTIVqwtAA5p1koorHPAJ1Q&s",
            email: "matheus@email.com.br",
            number: "(11)91234-5678",
            text: "Especialista em personalização de coquetéis, Mateus tem 8 anos de experiência na criação de bebidas sob medida para seus clientes. Ele é conhecido por sua habilidade em entender as preferências individuais de cada cliente e em adaptar os coquetéis de acordo com seus gostos e necessidades. Mateus é apaixonado por criar experiências únicas e memoráveis para seus clientes, garantindo que cada drink seja uma verdadeira expressão de sua personalidade e estilo."
        },
        {
            name: "Carolina Almeida",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAjjfUuRjqkH6_VYlw1o-a9m53xm7TCkthiQR6r7TNHQ&s",
            email: "carol@email.com.br",
            number: "(11)91234-5678",
            text: "Com 10 anos de experiência em personalização de coquetéis, Carolina é reconhecida por sua criatividade e habilidade em criar coquetéis que são verdadeiramente únicos. Ela adora desafiar as expectativas de seus clientes, experimentando combinações de sabores incomuns e técnicas de preparo inovadoras para produzir drinks que são uma verdadeira celebração da individualidade de cada cliente. Carolina está comprometida em oferecer uma experiência excepcional a todos os que buscam uma experiência personalizada e exclusiva."
        },
        {
            name: "Felipe Mendonça",
            photo: "https://st3.depositphotos.com/13194036/18525/i/450/depositphotos_185259716-stock-photo-handsome-barman-standing-alcohol-drink.jpg",
            email: "felimem@email.com.br",
            number: "(11)91234-5678",
            text: "Bartender apaixonado por personalização de coquetéis, Felipe tem 7 anos de experiência na criação de bebidas adaptadas às preferências de seus clientes. Ele é especializado em combinar sabores e ingredientes de forma única e criativa, produzindo coquetéis que surpreendem e encantam seus clientes. Felipe está sempre em busca de novas inspirações e técnicas para oferecer uma experiência verdadeiramente personalizada e memorável a todos os seus clientes."
        },
        {
            name: "Ana Paula Santos",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhRWr234oXSMm-Y1Pbj2Qo3XizT2hoPQUUGSRDY1xgbg&s",
            email: "apsantos@email.com.br",
            number: "(11)91234-5678",
            text: "Com 9 anos de experiência em personalização de coquetéis, Ana Paula é conhecida por sua habilidade em criar bebidas que refletem a personalidade e os gostos individuais de seus clientes. Ela adora trabalhar em estreita colaboração com seus clientes, ouvindo suas preferências e criando coquetéis que são verdadeiras expressões de quem são. Ana Paula está comprometida em oferecer uma experiência excepcional a todos os que buscam um coquetel personalizado e exclusivo para suas ocasiões especiais."
        },
    ]

    const [experts, setExperts] = useState(0)

    function ClickCoquetelaria() {
        setExperts(1)
    }

    function ClickMixologia() {
        setExperts(2)
    }

    function ClickWhisky() {
        setExperts(3)
    }

    function ClickSAlcool() {
        setExperts(4)
    }

    function ClickPersonalizado() {
        setExperts(5)
    }

    function ClickBack() {
        setExperts(0)
    }


    const [selected, setSelected] = useState(1)

    function Coquetelaria() {
        setSelected(1)
    }

    function Mixologia() {
        setSelected(2)
    }

    function Whisky() {
        setSelected(3)
    }

    function SAlcool() {
        setSelected(4)
    }

    function Personalizado() {
        setSelected(5)
    }

    return (
        <div>
            {experts === 0 ? (
                < div id='Specialties' className={style.Specialties} >

                    <div>
                        {/* Coquetelaria Clássica */}
                        <Card click={ClickCoquetelaria} text="Coquetelaria Clássica" bg="https://universoretro.com.br/wp-content/uploads/2015/07/coquetel.jpg" select={Coquetelaria} />
                        {/* Mixologia Molecular */}
                        <Card click={ClickMixologia} text="Mixologia Molecular" bg="https://queroserbartender.com.br/wp-content/uploads/2023/04/Foto-site-5.png" select={Mixologia} />
                        {/* Bar de Whisky */}
                        <Card click={ClickWhisky} text="Bar de Whisky" bg="https://static.wixstatic.com/media/4beee1_de3c4956aedd4938827eaea89f5de2c2~mv2.jpg/v1/fit/w_852,h_568,q_90/4beee1_de3c4956aedd4938827eaea89f5de2c2~mv2.jpg" select={Whisky} />
                        {/* Coquetéis Sem Álcool */}
                        <Card click={ClickSAlcool} text="Coquetéis Sem Álcool" bg="https://www.mncenter.com.br/media/wysiwyg/sex-on-the-beach-soubh.jpg" select={SAlcool} />
                        {/* Personalização de Coquetéis */}
                        <Card click={ClickPersonalizado} text="Personalização de Coquetéis" bg="https://api.baraberto.com.br/wp-content/uploads/2023/07/bartender-fazendo-tailormade.png" select={Personalizado} />
                    </div>

                    <div className={style.SpecialtiesDescription}>
                        {selected === 1 ? (
                            <div>
                                <h2>Coquetelaria Clássica</h2>
                                <p>Esta especialidade foca em coquetéis tradicionais e populares, como Martini, Mojito, Margarita, entre outros. Os bartenders especializados nessa área são experientes em preparar e servir coquetéis clássicos com perfeição.</p>
                                <ButtonA text="Conhecer Especialistas" click={ClickCoquetelaria} />
                            </div>
                        ) : (selected === 2 ? (
                            <div>
                                <h2>Mixologia Molecular</h2>
                                <p>Bartenders especializados em mixologia molecular utilizam técnicas inovadoras e ingredientes incomuns para criar coquetéis únicos e surpreendentes. Isso pode incluir o uso de espumas, gelatinas, esferificações, entre outras técnicas</p>
                                <ButtonA text="Conhecer Especialistas" click={ClickMixologia} />
                            </div>
                        ) : (selected === 3 ? (
                            <div>
                                <h2>Bar de Whisky</h2>
                                <p>Bartenders especializados em shots são mestres em preparar pequenas doses de coquetéis intensos e saborosos, perfeitos para festas e eventos descontraídos. Eles podem oferecer uma variedade de shots criativos e divertidos para os clientes experimentarem.</p>
                                <ButtonA text="Conhecer Especialistas" click={ClickWhisky} />
                            </div>
                        ) : (selected === 4 ? (
                            <div>
                                <h2>Coquetéis Sem Álcool</h2>
                                <p>Esta especialidade atende a clientes que não consomem álcool, oferecendo uma variedade de coquetéis sem álcool deliciosos e refrescantes. Os bartenders podem criar combinações de sucos, refrigerantes, xaropes e ingredientes aromáticos para proporcionar uma experiência de bebida memorável.</p>
                                <ButtonA text="Conhecer Especialistas" click={ClickSAlcool} />
                            </div>
                        ) : (
                            <div>
                                <h2>Personalização de Coquetéis</h2>
                                <p>Alguns bartenders se destacam em personalizar coquetéis de acordo com as preferências individuais dos clientes. Eles podem adaptar receitas existentes ou criar coquetéis exclusivos sob medida para cada ocasião e paladar.</p>
                                <ButtonA text="Conhecer Especialistas" click={ClickPersonalizado} />
                            </div>
                        ))))}

                    </div>

                </div >
            ) : (experts === 1 ? (
                <div>
                    <div className={style.ExpertsBtn}>
                        <ButtonA text="Voltar" click={ClickBack} />
                    </div>
                    <div className={style.Experts}>
                        {expertsCoquetelaria.map((expert, index) => (
                            <SpeCard
                                key={index}
                                photo={expert.photo}
                                name={expert.name}
                                number={expert.number}
                                email={expert.email}
                                text={expert.text}
                            />
                        ))}
                    </div>
                </div >
            ) : (experts === 2 ? (
                <div>
                    <div className={style.ExpertsBtn}>
                        <ButtonA text="Voltar" click={ClickBack} />
                    </div>
                    <div className={style.Experts}>
                        {experstMixologia.map((expert, index) => (
                            <SpeCard
                                key={index}
                                photo={expert.photo}
                                name={expert.name}
                                number={expert.number}
                                email={expert.email}
                                text={expert.text}
                            />
                        ))}
                    </div>
                </div >
            ) : (experts === 3 ? (
                <div>
                    <div className={style.ExpertsBtn}>
                        <ButtonA text="Voltar" click={ClickBack} />
                    </div>
                    <div className={style.Experts}>
                        {experstWhisky.map((expert, index) => (
                            <SpeCard
                                key={index}
                                photo={expert.photo}
                                name={expert.name}
                                number={expert.number}
                                email={expert.email}
                                text={expert.text}
                            />
                        ))}
                    </div>
                </div >
            ) : (experts === 4 ? (
                <div>
                    <div className={style.ExpertsBtn}>
                        <ButtonA text="Voltar" click={ClickBack} />
                    </div>
                    <div className={style.Experts}>
                        {experstSAlcool.map((expert, index) => (
                            <SpeCard
                                key={index}
                                photo={expert.photo}
                                name={expert.name}
                                number={expert.number}
                                email={expert.email}
                                text={expert.text}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    <div className={style.ExpertsBtn}>
                        <ButtonA text="Voltar" click={ClickBack} />
                    </div>
                    <div className={style.Experts}>
                        {experstPersonalizado.map((expert, index) => (
                            <SpeCard
                                key={index}
                                photo={expert.photo}
                                name={expert.name}
                                number={expert.number}
                                email={expert.email}
                                text={expert.text}
                            />
                        ))}
                    </div >
                </div >
            )))))}
            <div>





            </div>
        </div>
    )
}

export default Specialties
