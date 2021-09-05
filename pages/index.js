import Head from 'next/head';
import Script from 'next/script';

function Home() {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                <title>Dev Front-End React Next.js</title>
            </Head>
            <nav className="navbar">
                <div className="max-width">
                    <div className="logo">
                        <a href="#top">Emeson Freire</a>
                    </div>
                    <ul className="menu">
                    <li><a href="#top" className="menu-btn">Home</a></li>
                    <li><a href="#sobre" className="menu-btn">Sobre</a></li>
                    <li><a href="#info-academico" className="menu-btn">Informações Acadêmicas</a></li>
                    <li><a href="#tecnologias" className="menu-btn">Tecnologias</a></li>
                    <li><a href="#contact" className="menu-btn">Contato</a></li>
                    </ul>
                    <div className="menu-btn">
                        <i className="fas fa-bars"></i>  {/* icone de barras para esconder o menu */} 
                    </div>
                </div>
            </nav>

            <section className="top" id="top">
                <div className="max-width">
                    <div className="top-content">
                    <img src={"/src/images/components/perfil.jpg"} className="perfil" alt=""/>
                    <div className="text-1">Sou o talento</div>
                    <div className="text-2">que a sua empresa precisa</div>
                    <div className="text-3">Procuro uma oportunidade Front End, você pode me ajudar?😁</div>
                    <a href="mailto:emeson.freire@hotmail.com?subject= posso te ajudar com uma vaga front end">Entrar em Contato</a>
                    </div>
                </div>
            </section>
            <section className="services" id="sobre">
            <div className="max-width">
                <h2 className="title">Sobre</h2>
                        <p>😎📢 Emeson Freire, alagoano arretado e paulista de coração! atualmente resido
                     em São Bernardo do Campo-SP, tenho 26 anos e casado a 7, me considero uma pessoa 
                     multipotencial . Minha trajetória acadêmica começa no IFAL com o curso técnico em 
                     agroindústria (alimentos); no IFAL tive a oportunidade de ser bolsista em alguns projetos
                      de extensão sendo um deles: produção de queijo boursin com leite de cabra; logo em 
                      seguida me tornei monitor de informática, e daí minha sede por conhecimento não parou 
                      mais: já cursei engenharia agronômica por 1 ano e meio, pedagogia por 6 meses, fiz curso 
                      profissionalizante no SENAI de mecâncio de máquinas de costura reta e overloque em 2018, 
                      atualmente estou cursando o 4° período de análise e desenvolvimento de sistemas, 
                      participei do Hiring Coders e estou me formando no SENAI como Eletricista.</p>
                    <br/>
                        <p>💻 Minha primeira experiência prática como desenvolvedor Front End foi um teste para
                         estagiário e meu desafio era criar uma copia de uma página web da empresa e assim o 
                         fiz, a partir dessa experiência comecei a gostar da ideia de ser desenvolvedor Front
                          End, em julho de 2021 tive a oportunidade de ser selecionado para participar do 
                          HIRING CODERS e expandir mais meu conhecimento como desenvolvedor Full Stack, das 3 
                          fases atualmente se encontro na #FASE2.</p>
                    <br/>
                        <p>❤Participo como voluntário de uma organização internacional que ajuda a pessoas a
                             encontrar ajuda para lidar com problemas do dia-a-dia, nessa mesma obra voluntária 
                             tive o prazer trabalhar lado a lado com pessoas de língua espanhola e então estudar 
                             espanhol ,e um marco para mim foi participar ajudando pessoas que falam o idioma 
                             árabe, entender a cultura, estudar o alfabeto e hoje posso dizer que árabe não é 
                             tão difícil como muitos acreditam, consegui decorar o alfabeto e consigo ler muitas 
                             coisas neste idioma. Deseja saber mais sobre esse serviço voluntário? acessa o <a href="https://www.jw.org/pt/testemunhas-de-jeova/">JW.ORG</a></p>
                    <br/>
                        <p>📈📝Estou sempre aberto para novas oportunidades e acredito que qualquer oportunidade 
                            que me é apresentada, sempre irá somar para mim pois a experiência vivida levo para
                             toda a vida e aplico em várias áreas diferentes.</p>
                    <br/><br/>
                        <p>😁🙃😉Fique à vontade para me adicionar no linkedin! é um prazer tê-lo aqui.</p>
                </div>
                </section>
                <section className="services" id="info-academico">
                    <div className="max-width">
                        <h2 class="title">Informações Acadêmicas</h2>
                        <p>📚 Instituição : Anhanguera</p>
                        <p>💻 Curso : SUPERIOR EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</p>
                        <p>conclusão prevista: Dezembro de 2021</p>
                        <br/>
                        <p>📚 Intituição: INSTITUTO FEDERAL DE ALAGOAS</p>
                        <p>🍽 Curso: Técnico em alimentos(Agroindústria)</p>
                        <p>Conclusão: Fevereiro de 2015</p>
                        <br/>
                        <p>📚Intituição: SENAI</p>
                        <p>🔌 Curso: Eletricista Predial</p>
                        <p>Conclusão: Setembro de 2021</p>
                        <br/>
                        <p>📚 Intituição: SENAI</p>
                        <p>🛠 Curso: Mecânico de Máquinas industriais</p>
                        <p>Conclusão: Julho de 2018</p>
                        
                    </div>
                </section>

        <section className="services" id="tecnologias">
            <div className="max-width">
                <h2 className="title">Tecnologias</h2>
                <div className="serv-content">
                    <div className="card">
                        <div className="box">
                            
                            <i className="fas fa-code"></i>
                            <div className="text">
                                 <p>Front End</p>
                                <img src="/images/logo-3-tecnologias.png" className="tecnologia1" alt="logo html5 css js"/>
                                <img src="/images/logo-bootstram.png" className="tecnologia1" alt="logo bootstrap"/>
                                <img src="/images/logo-nextjs.png" className="tecnologia1" alt="logo bootstrap"/>
                            </div>
                            
                        </div>
                    </div>

                    <div className="card">
                        <div className="box">
                            <i className="fas fa-database"></i>
                            <div className="text">
                             Banco de Dados
                             <img src="/images/MySQL-logo.png" className="tecnologia1" alt="logo bootstrap"/>
                            </div>
                            
                        </div>
                    </div>

                    <div className="card">
                        <div className="box">
                            <i className="fas fa-user-plus"></i>
                            <div className="text">
                                <p>Redes Sociais </p>
                                {/*<a href="https://github.com/emesonfreire"><img src="/src/images/components/logo-github.png" target="_blank" className="tecnologia1" {border-radius:5%} alt=" "/></a>*/}
                                <a href="https://www.linkedin.com/in/emesonfreire/" target="_parent"  ><img src="/src/images/components/logo-linkedin.png" className="tecnologia1" alt=""/></a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>  
        </section>

        <section className="contact" id="contact">
            <div className="max-width">
                <h2 className="title">Contato</h2>
                <div className="contact-content">
                    <div className="column left">
                        <p>Fique à vontade para entrar em contato comigo por meio das opçoes abaixo!</p>
                        <div className="icons">
                            <div className="row">
                                <i className="fas fa-user"></i>
                                <div className="info">
                                    <div className="head">Desenvolvedor Front End</div>
                                    <div className="sub-title"><a href="#">Emeson Freire</a> </div>
                                </div>
                            </div>

                            <div className="row">
                                <i className="fab fa-whatsapp"></i>
                                <div className="info">
                                    <div className="head">Telefone</div>
                                    <div className="sub-title"><a href="https://web.whatsapp.com/send?phone=5511966927996" target="_blank">(11)9 6692-7996</a></div>
                                </div>
                            </div>

                            <div className ="row" >
                                <i className="fas fa-envelope"></i>
                                <div className="info">
                                    <div className="head">E-mail</div>
                                    <div className="sub-title"><a href="mailto:emeson.freire@hotmail.com?subject= posso te ajudar com uma vaga front end">emeson.freire@hotmail.com</a></div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fab fa-github"></i>
                                <div className="info">
                                    <div className="head">Repositório</div>
                                    <div className="sub-title"><a href="https://github.com/emesonfreire">github.com/emesonfreire</a></div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fab fa-linkedin"></i>
                                <div className="info">
                                    <div className="head">Rede social</div>
                                    <div className="sub-title"><a href="https://www.linkedin.com/in/emesonfreire/">in/emesonfreire/</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column right">
                        <div className="text">Mensagem de Contato</div>
                        <form>
                            <div className="fields">
                                <div className="field name">
                                    <input type="text" placeholder="Digite o nome" required/>
                                </div>
                                <div className="field email">
                                    <input type="email" placeholder="Digite o e-mail" required/>
                                </div>
                            </div>

                            <div className="field">
                                <input type="text" placeholder="Digite o assunto" required />
                            </div>

                            <div className="field textarea">
                                <textarea cols="30" rows="10" placeholder="Digite o conteúdo" required></textarea>
                            </div>

                            <div className="button-area">
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <footer>
            <span>Create By <a  href="#">&copy Emeson Freire 2021</a></span>
        </footer>


            <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" strategy="beforeInteractive" />

            <Script src="custom.js" strategy="afterInteractive" />
        </div>
    );
}

export default Home;