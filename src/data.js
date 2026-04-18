// Data structure for the Fado group website
// Edit this file to add/update songs and resources

const repertoireData = [
    {
        id: 7,
        title: "Cantar de Emigração",
        category: "coimbra",
        tom: "Mi menor",
        composer: "José Niza / Rosalía de Castro",
        lyrics: `Este parte, aquele parte 
E todos, todos se vão 
Oh terra ficas, sem homens 
que possam cortar teu pão 
Tens em troca 
órfãos e órfãs 

E campos de solidão 
E mães que não têm filhos 
filhos que não têm pai Corações
Que tens e sofrem 
Longas ausências mortais 
Viúvas de vivos mortos 
Que ninguém consolará

Este parte, aquele parte 
e todos, todos se vão 
Oh terra ficas, sem homens 
que possam cortar teu pão`,
        partitura: "biblioteca/cantardeemigracao/cantardeemigracao.pdf",
        video: "",
        notes: "Canção académica associada ao repertório de Coimbra, temática de emigração e saudade"
    },
    {
        id: 8,
        title: "Minha Mãe",
        category: "coimbra",
        tom: "",
        composer: "Adriano Correia de Oliveira/José Afonso",
         lyrics: `ó minha mãe, minha mãe
ó minha mãe, minha amada. (bis)

quem tem uma mãe, tem tudo
quem não tem mãe, não tem nada.
laralarala la laralarala la
laralarala la laralarala la


quem não tem mãe, não tem nada
quem a perde é pobrezinho. (bis)

ó minha mãe, minha amada
onde estás que eu estou sózinho.
laralarala la laralarala la laralarala la
laralarala la laralarala la laralarala la


Estou sozinho no mar largo
Sem medo à noite serrada. (bis)

ó minha mãe, ó minha mãe.
ó minha mãe, minha amada.

laralarala la laralarala la laralarala la
laralarala la laralarala la laralarala la
`,
        partitura: "biblioteca/minhamae/minhamae.pdf",
        video: "",
        notes: "Canção associada ao repertório académico de Coimbra"
    },
    {
        id: 9,
        title: "Minho Encantador",
        category: "coimbra",
        tom: "",
        composer: "Paulo Sá",
        lyrics: `Adeus Minho encantador
Onde vive o meu amor
Tão sozinho abandonado

Adeus Minho encantador
Onde vive o meu amor
Tão sozinho abandonado

Eu hei-de voltar um dia
P´la Senhora d’Agonia
Há-de ser nosso noivado

Eu hei-de voltar um dia
P´la Senhora d’Agonia
Há-de ser nosso noivado
E se eu nunca mais voltar
Deixa meus olhos chorar
No adeus da despedida

E se eu nunca mais voltar
Deixa meus olhos chorar
No adeus da despedida

Passo a vida a soluçar
Qu’ importa o mundo girar
Sobre a minha alma perdida

Passo a vida a soluçar
Qu’ importa o mundo girar
Sobre a minha alma perdida
Adeus Minho encantador
Onde vive o meu amor
Tão sozinho abandonado
`,
        partitura: "biblioteca/minhoencantador/minhoencantador.pdf",
        video: "",
        notes: "Canção popular portuguesa / inspiração regional"
    },
    {
        id: 10,
        title: "O Meu Desejo",
        category: "coimbra",
        tom: "",
        composer: "Tradicional",
        lyrics: `O meu desejo é dar-te um beijo 
                                                            }  BIS 
É ter desejo por te beijar 



Perdidamente como quem sente 
Que o teu sorriso vai acabar  

Perdidamente como quem sente  
Que o teu sorriso vai acabar  



O meu desejo é dar-te um beijo 
                                                             }  BIS 
É ter desejo por te beijar 



Como quem ama, do Sol a chama 
Como quem reza, sempre a chorar 

Como quem ama, do Sol a chama 
Como quem reza, sempre a chorar 

`,
        partitura: "biblioteca/omeudesejo/omeudesejo.pdf",
        video: "",
        notes: "Fado tradicional"
    },
    {
        id: 11,
        title: "Ondas do Mar",
        category: "coimbra",
        tom: "",
        composer: "Tradicional",
        lyrics: `Meu amor vem sobre as ondas
        Meu amor vem sobre o mar         [bis]


Ai quem me dera morrer
Nas águas do teu olhar                 [bis]
(
Meu amor vem sobre as ondas
Meu amor vem sobre o mar

Dos meus olhos meu amor
Nascem as ondas do mar...          [bis]

Lágrimas tristes que choro
Saudades do teu olhar!...             [bis]
(
Dos meus olhos meu amor
Nascem as ondas do mar...
`,
        partitura: "biblioteca/ondasdomar/ondasdomar.pdf",
        video: "",
        notes: "Fado tradicional marítimo"
    },
    {
        id: 12,
        title: "Samaritana",
        category: "coimbra",
        tom: "",
        composer: "Tradicional",
        lyrics: `Dos amor's do Redentor
Não reza a História Sagrada
Mas diz uma lenda encantada
Que o Bom Jesus sofreu d'amor.

Sofreu consigo e calou
Sua paixão divinal,
Assim como qualquer mortal
Que um dia d'amor palpitou.

Refrão
Samaritana,
Plebeia de Sicar,
Alguém espreitando
Te viu Jesus beijar

De tarde quando
Foste encontrá-lo só,
Morto de sede
Junto à tasca de Jacob.

E tu, risonha, acolheste
O beijo que te encantou,
Serena, empalideceste
E Jesus Cristo corou.

Corou! por ver quanta luz
Irradiava da tua fronte,
Quando disseste: - Ó Meu Jesus,
Que bem eu fiz, Senhor, em vir à fonte.

Refrão
`,
        partitura: "biblioteca/samaritana/samaritana.pdf",
        video: "",
        notes: "Fado clássico"
    },
    {
        id: 13,
        title: "Saudades de Coimbra",
        category: "coimbra",
        tom: "",
        composer: "Tradicional Académico",
        lyrics: `Gm			    D7
Oh Coimbra do Mondego 
Cm		D7		Gm
E dos amores que eu lá tive      (Bis)

F				Bb
Quem te não viu anda cego 
D7			Gm
Quem te não ama não vive 

G#			Gm
Quem te não viu anda cego 
D7			Gm
Quem te não ama não vive 


Gm   D7    Gm    (2x) 

Gm			D7
Do Choupal até à Lapa
 Cm		D7        Gm 
Foi Coimbra meus amores     (Bis)

F			Bb
A sombra da minha capa
D7			Gm
Pelo chão abriu em flores 

G#			Gm
A sombra da minha capa
D7			Gm
Pelo chão abriu em flores 
`,
        partitura: "biblioteca/saudadescoimbra/saudadescoimbra.pdf",
        video: "",
        notes: "Canção académica de Coimbra"
    },
    {
        id: 14,
        title: "Teu Nome",
        category: "coimbra",
        tom: "",
        composer: "José Mesquita",
        lyrics: `Teu nome, na voz do vento
	Teu nome, na voz do mar  		2X

	Teu nome… encantamento
	Na vida só por te amar

	Teu nome na voz do vento
	Teu nome na voz do mar



	Teu nome, traz o luar
	Traz o sol e trás a esperança	2X
	
	De um dia, eu te encontrar
	Como um barco a bonança

	De um dia, eu te encontrar
	Como um barco a bonança
`,
        partitura: "biblioteca/teunome/teunome.pdf",
        video: "",
        notes: "Fado tradicional"
    },
    {
        id: 15,
        title: "Traz Outro Amigo Também",
        category: "coimbra",
        tom: "",
        composer: "Popular",
        lyrics: `Amigo,
Maior que o pensamento
Por essa estrada amigo vem
Por essa estrada amigo vem
Não percas tempo que o vento
É meu amigo também
Não percas tempo que o vento
É meu amigo também

Em terras
Em todas as fronteiras
Seja benvindo quem vier por bem
Seja benvindo quem vier por bem
Se alguém houver que não queira
Trá-lo contigo também
Se alguém houver que não queira
Trá-lo contigo também

Aqueles
Aqueles que ficaram
Em toda a parte todo o mundo tem
Em toda a parte todo o mundo tem
Em sonhos me visitaram
Traz outro amigo também 
Em sonhos me visitaram
Traz outro amigo também
`,
        partitura: "biblioteca/trazoutroamigo/trazoutroamigo.pdf",
        video: "",
        notes: "Canção académica / popular"
    },
    {
        id: 16,
        title: "Trova do Vento Que Passa",
        category: "coimbra",
        tom: "",
        composer: "Adriano Correia de Oliveira",
        lyrics: `
Pergunto ao vento que passa
Notícias do meu país
E o vento cala a desgraça
O vento nada me diz.

E o vento cala a desgraça
O vento nada me diz.

Mas há sempre uma candeia
Dentro da própria desgraça
Há sempre alguém que semeia
Canções no vento que passa.

Há sempre alguém que semeia
Canções no vento que passa.

Mesmo na noite mais triste
Em tempo de servidão
Há sempre alguém que resiste
Há sempre alguém que diz não.

Há sempre alguém que resiste
Há sempre alguém que diz não.
`,
        partitura: "biblioteca/trovavento/trovavento.pdf",
        video: "",
        notes: "Balada académica icónica"
    },
    {
        id: 20,
        title: "Canção das Lágrimas",
        category: "coimbra",
        tom: "",
        composer: "",
        lyrics: `Lágrimas que a gente chora
	E sufocam nossos ais,
	Lágrimas que a gente chora
	E sufocam nossos ais,

	Deixai-as lá ir embora
	Que elas vão, nem voltem mais
	Deixai-as lá ir embora
	Que elas vão, nem voltem mais


	Tanta dor, tanta amargura,
	A sulcar faces tão belas
	Tanta dor, tanta amargura,
	A sulcar faces tão belas

	E tanta água que é pura
	A lavar sujas vielas.
	E tanta água que é pura
	A lavar sujas vielas
`,
        partitura: "biblioteca/cancaodaslagrimas/cancaodaslagrimas.pdf",
        video: "",
        notes: "Canção académica"
    },
    {
        id: 21,
        title: "É Preciso Acreditar",
        category: "coimbra",
        tom: "",
        composer: "",
        lyrics: `É preciso acreditar, é preciso acreditar
Que o sorriso de quem passa
É um bem para se guardar
Que é luar ou sol de graça
Que nos vem alumiar, com amor alumiar

É preciso acreditar, é preciso acreditar
Que a canção de quem trabalha
É um bem para se guardar
E não há nada que valha
A vontade de cantar, a qualquer hora cantar

É preciso acreditar, é preciso acreditar
Que uma vela ao longe solta
É um bem para se guardar
Que se um barco parte ou volta
Passará no alto mar, e é livre o alto mar

É preciso acreditar, é preciso acreditar
Que esta chuva que nos molha
É um bem para se guardar
Que há sempre terra que colha
Um ribeiro a despertar, para um pão por despertar`,

        partitura: "biblioteca/eprecisoacreditar/eprecisoacreditar.pdf",
        video: ""
    },
    {
        id: 22,
        title: "És",
        category: "coimbra",
        tom: "",
        composer: "",
        lyrics: `És… és o trigo maduro
Voando ao vento, na seara doirada!
És… és o trigo maduro
Voando ao vento, na seara doirada!

És a jóia que procuro, tocando no tempo da vida embalada
És a jóia que procuro, tocando no tempo da vida embalada!

És, a ternura voando, a fonte que jorra, a água da vida
És, a ternura voando, a fonte que jorra, a água da vida!

És o desejo ansiado, sonho adiado, enfim encontrado
És o desejo ansiado, sonho adiado, enfim encontrado

És a vida, o princípio e o fim… és o tudo e o nada
Cais da partida, cais da chegada
És o sonho que embala, a minha vida.`,
        partitura: "biblioteca/es/es.pdf",
        video: ""
    },
    {
        id: 23,
        title: "Maria - Antero de Quental",
        category: "coimbra",
        tom: "",
        composer: "",
        lyrics: `


Tenho cantado esperanças...
Tenho falado d'amores...
...Das saudades e dos sonhos
Com que embalo as minhas dores...

Entre os ventos suspirando 
Vagas, ténues harmonias,
Tendes visto como correm
Minhas doidas fantasias.

E eu cuidei que era poesia
Todo esse louco sonhar...
Cuidei saber o que é vida
Só porque sei delirar...


Só porque à noite, dormindo
Ao seio duma visão,
Encontrava algum alivio,
Meu dorido coração, 

Cuidei ser amor aquilo
E ser aquilo que viver...
Oh! que sonhos que se abraçam
Quando se quer esquecer !

Eram fantasmas que a noite
Trouxe, e o dia já levou...
A luz d'estranha alvorada
Hoje minha alma acordou !


Esquecei aqueles cantos...
Só agora sei falar !
Perdoa-me esses delírios...
Só agora soube amar !
`,
        partitura: "biblioteca/maria/maria.pdf",
        video: ""
    },
    {
        id: 24,
        title: "Balada de Despedida do 5º Ano Jurídico",
        category: "coimbra",
        tom: "",
        composer: "",
        lyrics: `Sentes que o tempo acabou
Primavera de flor adormecida,
Qualquer coisa que não volta que voou,
Que foi um rio, um ar, na tua vida.

E levas em ti guardado
O choro de uma balada
Recordações do passado
O bater da velha cabra.

Capa negra de saudade
No momento da partida
Segredos desta cidade
Levo comigo p'rá vida.

Sabes que o desenho do adeus
É fogo que nos queima devagar,
E no lento cerrar dos olhos teus
Fica a esperança de um dia aqui voltar.

E levas em ti guardado
O choro de uma balada
Recordações do passado
O bater da velha cabra.

Capa negra de saudade
No momento da partida
Segredos desta cidade
Levo comigo p'rá vida.
`,
        partitura: "biblioteca/baladajuridico/baladajuridico.pdf",
        video: ""
    },
    {
        id: 25,
        title: "Balada de Despedida do 6º Ano Médico",
        category: "coimbra",
        tom: "",
        composer: "",
        lyrics: `Coimbra tem mais encanto
Na hora da despedida
Que as lágrimas do meu pranto
São a luz que lhe dá vida

Quem me dera estar contente
Enganar a minha dor
Mas a saudade não mente
Se é verdadeiro o amor

Não me tentes enganar
Com a tua formosura
Que para além do luar
Há sempre noite escura

Coimbra tem mais encanto
Na hora da despedida
Que as lágrimas do meu pranto
São a luz que lhe dá vida

Coimbra tem mais encanto
Na hora da despedida`,
        partitura: "biblioteca/baladamedico/baladamedico.pdf",
        video: ""
    },
    {
        id: 26,
        title: "Balada de Despedida Engenharia 08",
        category: "coimbra",
        tom: "",
        composer: "",
        lyrics: `São as capas as primeiras
De glórias que hão de ficar
São lágrimas verdadeiras
Salgadas pelo azul do mar
São a luz que no peito morre
Negras, negras sobre o ar
São a cruz de um tempo que foge
E ilusões de que há de voltar

E o negro fado
Da tua vida
Te põe chorando
Rumo à partida
Rumo ao futuro
Nem sempre brando
Uma lonjura
Que vai ficando

Sobre o luar da ribeira
Ao ver seus barcos rabelos
Uma saudade se abeira
Na mente um dia não vê-los
Corações que partem de esperança
De uma vida aventureira
Emoções que o tempo destrança
Como o mundo na sua esteira

E o negro fado
Da tua vida
Te põe chorando
Rumo à partida
Rumo ao futuro
Nem sempre brando
Uma lonjura
Que vai ficando`,
        partitura: "biblioteca/baladaengenharia/baladaengenharia.pdf",
        video: ""
    },
    {
        id: 27,
        title: "Cantiga Para Quem Sonha",
        category: "coimbra",
        tom: "",
        composer: "",
        lyrics: `Tu que tens dez reis de esperança e de amor
Grita bem alto que queres viver.
Compra pão e vinho, mas rouba uma flor.
Tudo o que é belo não é de vender.

Não vendem ondas do mar,
Nem brisa ou estrelas, sol ou lua cheia.
Não vendem moças de amar,
Nem certas janelas em dunas de areia.

Canta, canta como uma ave ou um rio.
Dá o teu braço aos que querem sonhar.
Quem trouxer mãos livres ou um assobio
Nem é preciso que saiba cantar.

Tu que crês num mundo maior e melhor
Grita bem alto que o céu está aqui.
Tu que vês irmãos, só irmãos em redor,
Crê que esse mundo começa por ti.

Traz uma viola, um poema,
Um passo de dança, um sonho maduro.
Canta glosando este tema,
Em cada criança há um homem puro.

Canta, canta como uma ave ou um rio.
Dá o teu braço aos que querem sonhar.
Quem trouxer mãos livres ou um assobio
Nem é preciso que saiba cantar.`,
        partitura: "biblioteca/cantigasonha/cantigasonha.pdf",
        video: ""
    },
    {
        id: 28,
        title: "Capa Negra Rosa Negra",
        category: "coimbra",
        tom: "",
        composer: "",
        lyrics: `Capa negra, rosa negra
Rosa negra sem roseira 	bis
Abre-te bem nos meus ombros
Como o vento numa bandeira.
Como o vento numa bandeira.

Abre-te bem nos meus ombros   
Vira costas à saudade			bis
Capa negra, rosa negra
Bandeira de liberdade.
Bandeira de liberdade.

Eu sou livre como as aves
E passo a vida a cantar		bis
Coração que nasceu livre
Não se pode acorrentar.
Não se pode acorrentar.
`,
        partitura: "biblioteca/capanegra/capanegra.pdf",
        video: ""
    },
    {
        id: 29,
        title: "Canção de Embalar",
        category: "coimbra",
        tom: "",
        composer: "",
        lyrics: `Dorme meu menino a estrela d'alva
Já a procurei e não a vi
Se ela não vier de madrugada
Outra que eu souber será p'ra ti          	|bis|

Outra que eu souber na noite escura
Sobre o teu sorriso de encantar
Ouvirás cantando nas alturas
Trovas e cantigas de embalar  		|bis|

Trovas e cantigas muito belas
Afina a garganta meu cantor
Quando a luz se apaga nas janelas
Perde a estrela d'alva o seu fulgor  	|bis|

Perde a estrela d'alva pequenina
Se outra não vier para a render
Dorme qu'inda a noite é uma menina
Deixa-a vir também adormecer  		|bis|
`,
        partitura: "biblioteca/cancaoembalar/cancaoembalar.pdf",
        video: ""
    },
    {
        id: 30,
        title: "Feiticeira",
        category: "coimbra",
        tom: "",
        composer: "",
        lyrics: `Ó meu amor, 	
Minha linda feiticeira, 	
Eu daria a vida inteira 	
Por um só beijo dos teus! 	

	
Por teu amor, 	
A minha vida era pouca, 	
P'ra beberes da minha boca, 	
Num beijo de eterno adeus! 	

Ó meu amor,
Sonho lindo este que eu tive,
Única esperança que vive
Na minh'alma a soluçar! 

Por teu amor
Eu morria de desejo:
Deste-me a vida num beijo
E eu vivi p'ra te beijar!

`,
        partitura: "biblioteca/feiticeira/feiticeira.pdf",
        video: ""
    },
    {
        id: 31,
        title: "Fado Hilário",
        category: "coimbra",
        tom: "",
        composer: "",
        lyrics: `A minha capa velhinha
É da cor da noite escura

Nela quero a mortalhar-me
Quando for p’ra sepultura

Nela quero a mortalhar-me, ai
Quando for p’ra sepultura

Ela há-de contar aos vermes, ai
Já que eu não posso falar

Segredos luarizados, ai
Da minh’alma a soluçar, ai

Eu quero que o meu caixão
Tenha uma forma bizarra
Eu quero que o meu caixão
Tenha uma forma bizarra

A forma de um coração, ai
Ai! A forma duma guitarra
A forma de um coração
Ai! A forma de uma guitarra`,
        partitura: "biblioteca/fadohilario/fadohilario.pdf",
        video: ""
    },
    {
        id: 1,
        title: "A Carta",
        category: "coimbra",
        tom: "",
        composer: "Tradicional",
        lyrics: ``,
        partitura: "biblioteca/acarta/A Carta - Guitarras.jpg",
        video: "",
        notes: ""
    },
    {
        id: 2,
        title: "Amor de Estudante",
        category: "coimbra",
        tom: "",
        composer: "Tradicional",
        lyrics: ``,
        partitura: "biblioteca/amordeestudante/amordeestudante.pdf",
        video: "",
        notes: ""
    },
    {
        id: 3,
        title: "As Guitarras",
        category: "coimbra",
        tom: "",
        composer: "Tradicional",
        lyrics: ``,
        partitura: "biblioteca/asguitarras/Letra - As guitarras.docx",
        video: "",
        notes: ""
    },
    {
        id: 4,
        title: "Balada a Barcelos",
        category: "coimbra",
        tom: "",
        composer: "Tradicional",
        lyrics: ``,
        partitura: "biblioteca/baladaabarcelos/Balada a Barcelos.pdf",
        video: "",
        notes: ""
    },
    {
        id: 5,
        title: "Balada do Amanhecer",
        category: "coimbra",
        tom: "",
        composer: "Tradicional",
        lyrics: ``,
        partitura: "biblioteca/baladadoamanhecer/Balada do Amanhecer.JPG",
        video: "",
        notes: ""
    },
    {
        id: 6,
        title: "Fado da Despedida",
        category: "coimbra",
        tom: "",
        composer: "Tradicional",
        lyrics: ``,
        partitura: "biblioteca/fadodadespedida/fadodadespedida.pdf",
        video: "",
        notes: ""
    },
    {
        id: 17,
        title: "Fado dos Beijos",
        category: "coimbra",
        tom: "",
        composer: "Tradicional",
        lyrics: ``,
        partitura: "biblioteca/fadodosbeijos/fadodosbeijos.pdf",
        video: "",
        notes: ""
    },
    {
        id: 18,
        title: "Lácrima",
        category: "coimbra",
        tom: "",
        composer: "Tradicional",
        lyrics: ``,
        partitura: "biblioteca/lacrima/lacrima.pdf",
        video: "",
        notes: ""
    },
    {
        id: 19,
        title: "Lá Longe",
        category: "coimbra",
        tom: "",
        composer: "Tradicional",
        lyrics: ``,
        partitura: "biblioteca/lalonge/lalonge.pdf",
        video: "",
        notes: ""
    },
    {
        id: 32,
        title: "Meia-Noite ao Luar",
        category: "coimbra",
        tom: "",
        composer: "Tradicional",
        lyrics: ``,
        partitura: "biblioteca/ameianoiteaoluar/ameianoiteaoluar.pdf",
        video: "",
        notes: ""
    },
    {
        id: 33,
        title: "Quando Passa nos Meus Olhos",
        category: "coimbra",
        tom: "",
        composer: "Tradicional",
        lyrics: ``,
        partitura: "biblioteca/quandopassanosmeusolhos/quandopassanosmeusolhos.pdf",
        video: "",
        notes: ""
    },
    {
        id: 34,
        title: "Sangue Novo",
        category: "coimbra",
        tom: "",
        composer: "Tradicional",
        lyrics: ``,
        partitura: "biblioteca/sanguenovo/sanguenovo.pdf",
        video: "",
        notes: ""
    },
    {
        id: 35,
        title: "Vejam Bem",
        category: "coimbra",
        tom: "",
        composer: "Tradicional",
        lyrics: ``,
        partitura: "biblioteca/vejambem/16-Vejam Bem-01.jpg.pdf",
        video: "",
        notes: ""
    }
];

const libraryResources = {
    letras: [
        {
            id: 1,
            title: "Coletânea de Letras - Fados Tradicionais",
            filename: "letras-tradicionais.pdf",
            category: "tradicional",
            file: "biblioteca/letras/letras-tradicionais.pdf",
            size: "150 KB",
            addedDate: "2024-01-10"
        },
        {
            id: 2,
            title: "Fados de Coimbra - Letras Compiladas",
            filename: "letras-coimbra.pdf",
            category: "coimbra",
            file: "biblioteca/letras/letras-coimbra.pdf",
            size: "175 KB",
            addedDate: "2024-01-15"
        },
        {
            id: 3,
            title: "Letras de Fados de coimbra",
            filename: "letras-coimbra.pdf",
            category: "coimbra",
            file: "biblioteca/letras/letras-coimbra.pdf",
            size: "160 KB",
            addedDate: "2024-01-20"
        },
        {
            id: 4,
            title: "A Carta - Letra",
            filename: "A Carta - Letra.pdf",
            category: "coimbra",
            file: "biblioteca/acarta/A Carta - Letra.pdf",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 5,
            title: "Amor de Estudante - Letra",
            filename: "Letra - Amor de estudante.pdf",
            category: "coimbra",
            file: "biblioteca/amordeestudante/Letra - Amor de estudante.pdf",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 6,
            title: "As Guitarras - Letra",
            filename: "Letra - As guitarras.docx",
            category: "coimbra",
            file: "biblioteca/asguitarras/Letra - As guitarras.docx",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 7,
            title: "Balada de Despedida do 5º Ano Jurídico - Letra",
            filename: "Letra - Balada de Despedida do 5º Ano Jurídico 88_89.pdf",
            category: "coimbra",
            file: "biblioteca/baladajuridico/Letra - Balada de Despedida do 5º Ano Jurídico 88_89.pdf",
            size: "",
            addedDate: "2025-02-07"
        }
    ],
    guitarraClassica: [
        {
            id: 1,
            title: "A Carta - Guitarras",
            filename: "A Carta - Guitarras.jpg",
            category: "coimbra",
            file: "biblioteca/acarta/A Carta - Guitarras.jpg",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 2,
            title: "Amor de Estudante - Guitarra Clássica",
            filename: "Amor de estudante - Guitarra Clássica.docx",
            category: "coimbra",
            file: "biblioteca/amordeestudante/amordeestudante.pdf",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 3,
            title: "Balada de Despedida do 6º Ano Médico de 1958 - Guitarras",
            filename: "Guitarras - Balada de Despedida do 6º Ano Médico de 1958-1.pdf",
            category: "coimbra",
            file: "biblioteca/baladamedico58/Guitarras - Balada de Despedida do 6º Ano Médico de 1958.pdf",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 4,
            title: "Balada da Despedida 6º ano Médico 93-99 - Acordes",
            filename: "Acordes - Balada da Despedida 6º ano Médico93-99.pdf",
            category: "coimbra",
            file: "biblioteca/baladamedico99/Acordes - Balada da Despedida 6º ano Médico93-99.pdf",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 5,
            title: "Cantiga Para Quem Sonha - Acordes em Lá",
            filename: "Guitarras - Cantiga Para Quem Sonha - Acordes em Lá.pdf",
            category: "coimbra",
            file: "biblioteca/cantigasonha/Guitarras - Cantiga Para Quem Sonha - Acordes em Lá.pdf",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 6,
            title: "Capa Negra Rosa Negra - Guitarras",
            filename: "Guitarras - Capa Negra Rosa Negra.jpg",
            category: "coimbra",
            file: "biblioteca/capanegra/Guitarras - Capa Negra Rosa Negra.jpg",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 7,
            title: "É Preciso Acreditar - Guitarras",
            filename: "Guitarras - É Preciso Acreditar.pdf",
            category: "coimbra",
            file: "biblioteca/eprecisoacreditar/Guitarras - É Preciso Acreditar.pdf",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 8,
            title: "És - Guitarras",
            filename: "És - Guitarras.pdf",
            category: "coimbra",
            file: "biblioteca/es/És - Guitarras.pdf",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 9,
            title: "Fado Hilário - Guitarras",
            filename: "Guitarras - Fado Hilário.pdf",
            category: "coimbra",
            file: "biblioteca/fadohilario/Guitarras - Fado Hilário.pdf",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 10,
            title: "Maria F - Guitarra Clássica",
            filename: "Maria f#m - Guitarra Clássica.pdf",
            category: "coimbra",
            file: "biblioteca/maria/Maria f#m - Guitarra Clássica.pdf",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 11,
            title: "Maria Sim - Guitarra Clássica",
            filename: "Maria Sim - Guitarra Clássica.pdf",
            category: "coimbra",
            file: "biblioteca/mariasim/Maria Sim - Guitarra Clássica.pdf",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 12,
            title: "Minho Encantador - Acordes",
            filename: "Acordes - Minho Encantador-1.pdf",
            category: "coimbra",
            file: "biblioteca/minhoencantador/Acordes - Minho Encantador-1.pdf",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 13,
            title: "O Meu Desejo - Acordes",
            filename: "Acordes - O Meu Desejo.pdf",
            category: "coimbra",
            file: "biblioteca/omeudesejo/Acordes - O Meu Desejo.pdf",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 14,
            title: "Samaritana - Acordes",
            filename: "Acordes - Samaritana.pdf",
            category: "coimbra",
            file: "biblioteca/samaritana/Acordes - Samaritana.pdf",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 15,
            title: "Saudades de Coimbra - Guitarras",
            filename: "Guitarras - Saudades de Coimbra.pdf",
            category: "coimbra",
            file: "biblioteca/saudadescoimbra/Guitarras - Saudades de Coimbra.pdf",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 16,
            title: "Teu Nome",
            filename: "Em - Teu nome.pdf",
            category: "coimbra",
            file: "biblioteca/teunome/Em - Teu nome.pdf",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 17,
            title: "Traz Outro Amigo Também - Acordes",
            filename: "Acordes - Traz Outro Amigo Também.pdf",
            category: "coimbra",
            file: "biblioteca/trazoutroamigo/Acordes - Traz Outro Amigo Também.pdf",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 18,
            title: "Trova do Vento Que Passa - Acordes",
            filename: "Acordes - Trova.pdf",
            category: "coimbra",
            file: "biblioteca/trovavento/Acordes - Trova.pdf",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 19,
            title: "Feiticeira - Guitarras",
            filename: "Guitarras - Feiticeira.pdf",
            category: "coimbra",
            file: "biblioteca/feiticeira/Gravações/Guitarras - Feiticeira.pdf",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 20,
            title: "Ondas do Mar - Acordes",
            filename: "Acordes - Ondas do mar.pdf",
            category: "coimbra",
            file: "biblioteca/ondasdomar/Gravações/Acordes - Ondas do mar.pdf",
            size: "",
            addedDate: "2025-02-07"
        }
    ],
    guitarraPortuguesa: [
        {
            id: 1,
            title: "Cantiga Para Quem Sonha - GP",
            filename: "GP - Cantiga Para Quem Sonha.pdf",
            category: "coimbra",
            file: "biblioteca/cantigasonha/GP - Cantiga Para Quem Sonha.pdf",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 2,
            title: "Fado Hilário - GP",
            filename: "GP - fado hilário.pdf",
            category: "coimbra",
            file: "biblioteca/fadohilario/GP - fado hilário.pdf",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 3,
            title: "Samaritana - GP",
            filename: "GP - Samaritana.pdf",
            category: "coimbra",
            file: "biblioteca/samaritana/GP - Samaritana.pdf",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 4,
            title: "Saudades De Coimbra - GP",
            filename: "GP - Saudades De Coimbra.pdf",
            category: "coimbra",
            file: "biblioteca/saudadescoimbra/GP - Saudades De Coimbra.pdf",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 5,
            title: "Feiticeira - GP",
            filename: "GP - feiticeira.pdf",
            category: "coimbra",
            file: "biblioteca/feiticeira/Gravações/GP - feiticeira.pdf",
            size: "",
            addedDate: "2025-02-07"
        }
    ],
    audios: [
        {
            id: 1,
            title: "Balada a Barcelos",
            filename: "Balada a Coimbra - Amanhecer.mp3",
            category: "coimbra",
            file: "biblioteca/baladaabarcelos/Balada a Coimbra - Amanhecer.mp3",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 2,
            title: "Balada de Despedida de Engenharia",
            filename: "Grupo de Fados da Faculdade de Engenharia da Universidade do Porto - Balada da Despedida de Engenharia.mp3",
            category: "coimbra",
            file: "biblioteca/baladaengenharia/Gravações/Grupo de Fados da Faculdade de Engenharia da Universidade do Porto - Balada da Despedida de Engenharia.mp3",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 3,
            title: "Balada de Despedida do 5º Ano Jurídico",
            filename: "Lopes__Balada de Despedida 89.mp3",
            category: "coimbra",
            file: "biblioteca/baladajuridico/Lopes__Balada de Despedida 89.mp3",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 4,
            title: "Canção das Lágrimas - CCOB 2015",
            filename: "2015_CCOB_Cancao_Das_Lagrimas.wav",
            category: "coimbra",
            file: "biblioteca/cancaodaslagrimas/Gravações/2015_CCOB_Cancao_Das_Lagrimas.wav",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 5,
            title: "Canção das Lágrimas - Hélder",
            filename: "Hélder - Lágrimas.mp3",
            category: "coimbra",
            file: "biblioteca/cancaodaslagrimas/Gravações/Hélder - Lágrimas.mp3",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 6,
            title: "Canção das Lágrimas - IPVC",
            filename: "IPVC Lágrimas.mp3",
            category: "coimbra",
            file: "biblioteca/cancaodaslagrimas/Gravações/IPVC Lágrimas.mp3",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 7,
            title: "Canção de Embalar - IPVC",
            filename: "IPVC Canção de Embalar.mp3",
            category: "coimbra",
            file: "biblioteca/cancaoembalar/Gravações/IPVC Canção de Embalar.mp3",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 8,
            title: "Cantar de Emigração - António Bernardino",
            filename: "António Bernardino - Cantiga para os Que Partem-Mim.mp3",
            category: "coimbra",
            file: "biblioteca/cantardeemigracao/António Bernardino - Cantiga para os Que Partem-Mim.mp3",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 9,
            title: "Cantiga Para Quem Sonha - Luíz Goes",
            filename: "Cantiga Para Quem Sonha - Luíz Goes.mp3",
            category: "coimbra",
            file: "biblioteca/cantigasonha/Cantiga Para Quem Sonha - Luíz Goes.mp3",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 10,
            title: "É Preciso Acreditar - CCOB 2015",
            filename: "2015_CCOB_E_Preciso_Acreditar.wav",
            category: "coimbra",
            file: "biblioteca/eprecisoacreditar/Gravações/2015_CCOB_E_Preciso_Acreditar.wav",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 11,
            title: "És - Hugo",
            filename: "És - Hugo.m4a",
            category: "coimbra",
            file: "biblioteca/es/Gravações/És - Hugo.m4a",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 12,
            title: "Fado Hilário - IPVC",
            filename: "IPVC Fado Hilário.mp3",
            category: "coimbra",
            file: "biblioteca/fadohilario/Gravações/IPVC Fado Hilário.mp3",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 13,
            title: "Feiticeira - Hélder e Meu Desejo - Chaves",
            filename: "Feiticeira Hélder e Meu Desejo Chaves.mp3",
            category: "coimbra",
            file: "biblioteca/feiticeira/Gravações/Feiticeira Hélder e Meu Desejo Chaves.mp3",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 14,
            title: "Maria - CCOB 2015",
            filename: "2015_CCOB_Maria.wav",
            category: "coimbra",
            file: "biblioteca/maria/Gravações/2015_CCOB_Maria.wav",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 15,
            title: "Maria F#m - Inem",
            filename: "Inem - Maria F#m.mp3",
            category: "coimbra",
            file: "biblioteca/maria/Gravações/Inem - Maria F#m.mp3",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 16,
            title: "Minho Encantador - IPVC",
            filename: "IPVC Minho Encantador.mp3",
            category: "coimbra",
            file: "biblioteca/minhoencantador/Gravações/IPVC Minho Encantador.mp3",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 17,
            title: "Minho Encantador",
            filename: "Minho Encantador 2.wav",
            category: "coimbra",
            file: "biblioteca/minhoencantador/Gravações/Minho Encantador 2.wav",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 18,
            title: "O Meu Desejo - Chaves",
            filename: "Chaves - O Meu Desejo.mp3",
            category: "coimbra",
            file: "biblioteca/omeudesejo/Gravações/Chaves - O Meu Desejo.mp3",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 19,
            title: "O Meu Desejo - IPVC",
            filename: "IPVC O Meu Desejo.mp3",
            category: "coimbra",
            file: "biblioteca/omeudesejo/Gravações/IPVC O Meu Desejo.mp3",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 20,
            title: "Ondas do Mar - IPVC",
            filename: "IPVC Ondas do Mar.mp3",
            category: "coimbra",
            file: "biblioteca/ondasdomar/Gravações/IPVC Ondas do Mar.mp3",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 21,
            title: "Samaritana - Victor Almeida e Silva",
            filename: "Victor Almeida e Silva - Coimbra encanto e poesia - 04 - Samaritana.mp3",
            category: "coimbra",
            file: "biblioteca/samaritana/Gravações/Victor Almeida e Silva - Coimbra encanto e poesia - 04 - Samaritana.mp3",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 22,
            title: "Teu Nome - GP intro",
            filename: "GP intro.mp3",
            category: "coimbra",
            file: "biblioteca/teunome/Gravações/GP intro.mp3",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 23,
            title: "Teu Nome - IPCV",
            filename: "IPCV Teu Nome.mp3",
            category: "coimbra",
            file: "biblioteca/teunome/Gravações/IPCV Teu Nome.mp3",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 24,
            title: "Teu Nome - Susana",
            filename: "Susana - Teu Nome.wav",
            category: "coimbra",
            file: "biblioteca/teunome/Gravações/Susana - Teu Nome.wav",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 25,
            title: "Traz Outro Amigo Também - CCOB 2015",
            filename: "2015_CCOB_11_traz_outro_amigo_tambem.wav",
            category: "coimbra",
            file: "biblioteca/trazoutroamigo/Gravações/2015_CCOB_11_traz_outro_amigo_tambem.wav",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 26,
            title: "Trova do Vento Que Passa - Chaves",
            filename: "Chaves - Trova.mp3",
            category: "coimbra",
            file: "biblioteca/trovavento/Gravações/Chaves - Trova.mp3",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 27,
            title: "Trova do Vento Que Passa - IPVC",
            filename: "IPVC Trova.mp3",
            category: "coimbra",
            file: "biblioteca/trovavento/Gravações/IPVC Trova.mp3",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 28,
            title: "Trova do Vento Que Passa - Lopes",
            filename: "Trova do Vento que Passa - Lopes.mp3",
            category: "coimbra",
            file: "biblioteca/trovavento/Gravações/Trova do Vento que Passa - Lopes.mp3",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 29,
            title: "Instrumental - A Minha Música 14",
            filename: "A minha música 14.mp3",
            category: "instrumental",
            file: "biblioteca/Instrumentais/Originais/A minha música 14.mp3",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 30,
            title: "Instrumental - A Minha Música 14 (versão alternativa)",
            filename: "A minha música 14seses.mp3",
            category: "instrumental",
            file: "biblioteca/Instrumentais/Originais/A minha música 14seses.mp3",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 31,
            title: "Instrumental - A Minha Música 15",
            filename: "A minha música 15.mp3",
            category: "instrumental",
            file: "biblioteca/Instrumentais/Originais/A minha música 15.mp3",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 32,
            title: "Instrumental - A Minha Música 16",
            filename: "A minha música 16.mp3",
            category: "instrumental",
            file: "biblioteca/Instrumentais/Originais/A minha música 16.mp3",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 33,
            title: "Instrumental - Gerês (Versão com Ocarina)",
            filename: "Gerês (Versão com Ocarina).mp3",
            category: "instrumental",
            file: "biblioteca/Instrumentais/Originais/Gerês (Versão com Ocarina).mp3",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 34,
            title: "Instrumental - Gerês",
            filename: "Gerês.mp3",
            category: "instrumental",
            file: "biblioteca/Instrumentais/Originais/Gerês.mp3",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 35,
            title: "Instrumental - Origem",
            filename: "Origem.mp3",
            category: "instrumental",
            file: "biblioteca/Instrumentais/Originais/Origem.mp3",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 36,
            title: "Instrumental - Gravação VR0005",
            filename: "VR0005[1].WAV",
            category: "instrumental",
            file: "biblioteca/Instrumentais/Originais/VR0005[1].WAV",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 37,
            title: "Instrumental - Gravação VR0006",
            filename: "VR0006[1].WAV",
            category: "instrumental",
            file: "biblioteca/Instrumentais/Originais/VR0006[1].WAV",
            size: "",
            addedDate: "2025-02-07"
        }
    ],
    videos: [
        {
            id: 1,
            title: "Amor de Estudante - GP - João",
            filename: "GP - Amor de Estudante - João.mp4",
            category: "coimbra",
            file: "biblioteca/amordeestudante/Gravações/GP - Amor de Estudante - João.mp4",
            url: "",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 2,
            title: "Balada a Barcelos",
            filename: "VID20231121200508.mp4",
            category: "coimbra",
            file: "biblioteca/baladaabarcelos/Gravações/VID20231121200508.mp4",
            url: "",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 3,
            title: "Balada de Despedida de Engenharia",
            filename: "VID20240117110235.mp4",
            category: "coimbra",
            file: "biblioteca/baladaengenharia/Gravações/VID20240117110235.mp4",
            url: "",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 4,
            title: "Balada de Despedida do 6º Ano Médico de 1958 - GP - Hugo",
            filename: "GP - Balada 58 -  Hugo.mp4",
            category: "coimbra",
            file: "biblioteca/baladamedico58/Gravações/GP - Balada 58 -  Hugo.mp4",
            url: "",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 5,
            title: "Capa Negra, Rosa Negra - GP - Sónia",
            filename: "GP - Capa Negra, Rosa Negra - Sónia.mp4",
            category: "coimbra",
            file: "biblioteca/capanegra/Gravações/GP - Capa Negra, Rosa Negra - Sónia.mp4",
            url: "",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 6,
            title: "É Preciso Acreditar - Clássica",
            filename: "ePrecisoAcreditar-classic.mp4",
            category: "coimbra",
            file: "biblioteca/eprecisoacreditar/Gravações/ePrecisoAcreditar-classic.mp4",
            url: "",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 7,
            title: "Fado Hilário",
            filename: "VID20231121200439.mp4",
            category: "coimbra",
            file: "biblioteca/fadohilario/Gravações/VID20231121200439.mp4",
            url: "",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 8,
            title: "Feiticeira - GP",
            filename: "GP - Feiticeira.mp4",
            category: "coimbra",
            file: "biblioteca/feiticeira/Gravações/GP - Feiticeira.mp4",
            url: "",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 9,
            title: "Minha Mãe - Clássica",
            filename: "MinhaMae-classica.mp4",
            category: "coimbra",
            file: "biblioteca/minhamae/Gravações/MinhaMae-classica.mp4",
            url: "",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 10,
            title: "Minha Mãe - Intro",
            filename: "MinhaMae-intro.mp4",
            category: "coimbra",
            file: "biblioteca/minhamae/Gravações/MinhaMae-intro.mp4",
            url: "",
            size: "",
            addedDate: "2025-02-07"
        },
        {
            id: 11,
            title: "Minha Mãe - Guitarra Portuguesa",
            filename: "Minha_mae_guitarra_portuguesa.mp4",
            category: "coimbra",
            file: "biblioteca/minhamae/Gravações/Minha_mae_guitarra_portuguesa.mp4",
            url: "",
            size: "",
            addedDate: "2025-02-07"
        }
    ]
};

// ========== INSTRUMENTAIS (Tablaturas) ==========
const instrumentaisData = [
    {
        id: 1,
        title: "Acção",
        composer: "Tradicional",
        folder: "biblioteca/Instrumentais/Acção",
        images: [
            "17.jpg",
            "18.jpg",
            "19.jpg"
        ]
    },
    {
        id: 2,
        title: "Balada de Coimbra",
        composer: "Tradicional",
        folder: "biblioteca/Instrumentais/Balada de Coimbra",
        images: [
            "Balada de Coimbra.jpg",
            "DSCF1633.JPG",
            "DSCF1634.JPG",
            "DSCF1635.JPG",
            "DSCF1636.JPG",
            "DSCF1637.JPG",
            "DSCF1638.JPG",
            "DSCF1639.JPG",
            "DSCF1640.JPG",
            "DSCF1641.JPG",
            "DSCF1642.JPG"
        ]
    },
    {
        id: 3,
        title: "Canto de Amor",
        composer: "Armando Goes",
        folder: "biblioteca/Instrumentais/Canto de Amor",
        images: [
            "02-Canto de Amor-01.jpg",
            "Canto de Amor 1(2).jpg",
            "Canto de Amor 2(2).jpg"
        ]
    },
    {
        id: 4,
        title: "Canção",
        composer: "Tradicional",
        folder: "biblioteca/Instrumentais/Canção",
        images: [
            "Canção 1(2).jpg",
            "Canção 2(2).jpg"
        ]
    },
    {
        id: 5,
        title: "Canção da Primavera",
        composer: "Tradicional",
        folder: "biblioteca/Instrumentais/Canção da Primavera",
        images: [
            "Canção da Primavera.JPG"
        ]
    },
    {
        id: 6,
        title: "Canção Pagã",
        composer: "Tradicional",
        folder: "biblioteca/Instrumentais/Canção Pagã",
        images: [],
        pdf: "CANÇAO PAGÃ.pdf"
    },
    {
        id: 7,
        title: "Canção Verdes Anos",
        composer: "Carlos Paredes",
        folder: "biblioteca/Instrumentais/Canção Verdes Anos",
        images: [
            "Canção Verdes Anos.jpg",
            "Canção Verdes Anos 1(2).JPG",
            "Canção Verdes Anos 2(2).JPG"
        ],
        pdf: "Verdes anos v01.pdf"
    },
    {
        id: 8,
        title: "Carlos Paredes - Asas sobre o Mundo",
        composer: "Carlos Paredes",
        folder: "biblioteca/Instrumentais/Carlos Paredes - Asas sobre o Mundo",
        images: [],
        pdf: "Carlos Paredes - Asas sobre o Mundo.pdf"
    },
    {
        id: 9,
        title: "Dança",
        composer: "Tradicional",
        folder: "biblioteca/Instrumentais/Dança",
        images: [
            "Dança FA.jpg",
            "Dança 1(2).jpg",
            "Dança 2(2).jpg"
        ]
    },
    {
        id: 10,
        title: "Estudo Nr 1 Paulo Soares",
        composer: "Paulo Soares",
        folder: "biblioteca/Instrumentais/Estudo Nr 1 Paulo Soares",
        images: [],
        pdf: "Estudo nr 1 PAULO SOARES.pdf"
    },
    {
        id: 11,
        title: "Melodia n.º 2",
        composer: "Tradicional",
        folder: "biblioteca/Instrumentais/Melodia n.º 2",
        images: [
            "Melodia n.º 2 FA.jpg",
            "Melodia N.º 2.jpg"
        ]
    },
    {
        id: 12,
        title: "Movimento Perpétuo",
        composer: "Tradicional",
        folder: "biblioteca/Instrumentais/Movimento Perpétuo",
        images: [
            "10.jpg",
            "11.jpg",
            "12.jpg",
            "13.jpg",
            "14d.jpg",
            "15.jpg",
            "16.jpg"
        ],
        pdf: "anossaguitarra.com.pdf"
    },
    {
        id: 13,
        title: "Originais - Padrinho",
        composer: "Original IPCA",
        folder: "biblioteca/Instrumentais/Originais",
        images: [],
        pdf: "padrinho.pdf"
    },
    {
        id: 14,
        title: "Raíz",
        composer: "Tradicional",
        folder: "biblioteca/Instrumentais/Raíz",
        images: [],
        pdf: "Carlos Paredes - Raíz.pdf"
    },
    {
        id: 15,
        title: "Romance nº 2",
        composer: "Tradicional",
        folder: "biblioteca/Instrumentais/Romance nº 2",
        images: []
    },
    {
        id: 16,
        title: "Sede e Morte",
        composer: "Tradicional",
        folder: "biblioteca/Instrumentais/Sede e Morte",
        images: [
            "Sede e Morte.jpg",
            "Sede 1(2).jpg",
            "Sede 2(2).jpg"
        ]
    },
    {
        id: 17,
        title: "Serenata no Tejo",
        composer: "Tradicional",
        folder: "biblioteca/Instrumentais/Serenata no Tejo",
        images: []
    },
    {
        id: 18,
        title: "Valsa",
        composer: "Tradicional",
        folder: "biblioteca/Instrumentais/Valsa",
        images: [
            "Valsa FA.jpg",
            "Valsa 1(2).jpg",
            "Valsa 2(2).jpg"
        ],
        pdf: "Valsa.pdf"
    },
    {
        id: 19,
        title: "Variações em Lá menor AP",
        composer: "Artur Paredes",
        folder: "biblioteca/Instrumentais/Variações em Lá menor AP",
        images: [
            "Variações em Lá menor AP 1(5).jpg",
            "Variações em Lá menor AP 2(5).jpg",
            "Variações em Lá menor AP 3(5).jpg",
            "Variações em Lá menor AP 4(5).jpg",
            "Variações em Lá menor AP 5(5).jpg"
        ]
    },
    {
        id: 20,
        title: "Variações em Lá menor João Bagão",
        composer: "João Bagão",
        folder: "biblioteca/Instrumentais/Variações em Lá menor João Bagão",
        images: [
            "Variações em Lá menor João Bagão 1(3).jpg",
            "Variações em Lá menor João Bagão 2(3).jpg",
            "Variações em Lá menor João Bagão 3(3).jpg"
        ]
    },
    {
        id: 21,
        title: "Variações em Ré menor AP",
        composer: "Artur Paredes",
        folder: "biblioteca/Instrumentais/Variações em Ré menor AP",
        images: [
            "Variações em Ré menor AP 1(5).jpg",
            "Variações em Ré menor AP 2(5).jpg",
            "Variações em Ré menor AP 3(5).jpg",
            "Variações em Ré menor AP 4(5).jpg",
            "Variações em Ré menor AP 5(5).jpg"
        ]
    },
    {
        id: 22,
        title: "Variações em Ré menor de Flávio Rodrigues",
        composer: "Flávio Rodrigues",
        folder: "biblioteca/Instrumentais/Variações em Ré menor de Flávio Rodrigues",
        images: [
            "Variações em Ré menor de Flávio Rodrigues 1(3).jpg",
            "Variações em Ré menor de Flávio Rodrigues 2(3).jpg",
            "Variações em Ré menor de Flávio Rodrigues 3(3).jpg"
        ]
    },
    {
        id: 23,
        title: "Variações sobre o Mondego",
        composer: "Tradicional",
        folder: "biblioteca/Instrumentais/Variações sobre o Mondego",
        images: [
            "Variações sobre o Mondego 1(4).jpg",
            "Variações sobre o Mondego 2(4).jpg",
            "Variações sobre o Mondego 3(4).jpg",
            "Variações sobre o Mondego 4(4).jpg"
        ]
    }
];
