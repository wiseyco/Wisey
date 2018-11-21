import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../layout/Navbar';
import Spinner from '../common/Spinner';
import { getCourseById } from '../../actions/courseActions';

class Course extends Component {

    componentDidMount () {
        if (this.props.match.params.id) {
            this.props.getCourseById(this.props.match.params.id)
        }
    }

    componentWillReceiveProps(nextProps) {
        
        if (nextProps.course.course === null && this.props.course.loading) {
          this.props.history.push('/not-found');
        }
      }

    render () {

        const { course, loading } = this.props.course;
        if (course === null || loading) {
            return (<Spinner />);
          } 

        
    
    return (
        <div> 
            <Navbar />
            <section className="section">
                <div className="container module-container">
                <div className="row title-row">
                    <div className="col-md-9">
                        <h1 className="module-name">{course.title}</h1>
                        <br />
                        <p>Master Angular (Angular 5, incl. Angular 6), React + Redux (React 16) & Node. Payments, Stripe, AWS, Express included.</p>
                        <br />
                        <img src="img/icons/star.png" alt="" />
                        <img src="img/icons/star.png" alt="" />
                        <img src="img/icons/star.png" alt="" />
                        <img src="img/icons/star.png" alt="" />
                        <img src="img/icons/star.png" alt="" />
                        &nbsp;
                        <span className="module-note"> 4,9 (200 notes). 9 participants inscrits</span>

                    </div>
                    <div className="col-md-3">
                        <img style={{width: '300px'}} src="img/coding.jpeg"className="img-thumbnail"  alt="" />
                        </div>
            </div>

            <div className="row module-row col-md-9 text-center">
                <div className="col-md-3">
                    <img className="module-icons" src="img/icons/calendar.png" alt="" />
                    <p>10 janvier 2018</p>
                </div>

                <div className="col-md-3">
                        <img className="module-icons" src="img/icons/hourglass.png" alt="" />
                        <p>5 jours</p>
                    </div>

                    <div className="col-md-3">

                            <img className="module-icons" src="img/icons/controls.png" alt="" />
                            <p>Notions HTML</p>
                        </div>

                        <div className="col-md-3">
                                <img className="module-icons" src="img/icons/training.png" alt="" />
                                <p>Présentiel</p>
                            </div>
            </div>

            <div className="row description-row col-md-9">
                    <div>
                        <p>
                                <h3>Qu’est-ce qu’un Développeur React et Node ?</h3>
                                Le chef de projet multimédia gère et coordonne l’ensemble de la production du produit multimédia autour d’une équipe composée de développeurs, UX designers, webdesigners, webmarketers…
                                
                                Cela lui permet de répondre aux besoins de communication de son client ou de sa structure en interne : vendre, informer, développer la notoriété, le trafic, l’image de marque…
                                
                                Vous serez chargé de :
                                
                                diagnostiquer et analyser la demande du client
                                formaliser la demande et soutenir votre proposition auprès du client
                                gérer le projet et coordonner les membr /es de l’équipe
                                mobiliser et mettre en oeuvre les compétences techniques de la production multimédia : développement, design, outils de communication et d’acquisition...
                                Selon la structure dans laquelle vous évoluerez, vos activités peuvent se diversifier : définir la ligne éditoriale, élaborer le plan de communication, rédiger les contenus, suivre le développement de l’application et de son interface...
                                
                                <h3>Spécialité Design</h3>
                                Grâce à la spécialisation Design, vous maîtriserez tous les aspects design du produit web. Vous concevrez les interfaces sous forme de maquettes et imaginerez en amont comment elles seront utilisées.
                                
                                Vous saurez être polyvalent·e : concevoir des logos et des illustrations en fonction des besoins, mais aussi travailler sur du design de présentation pour donner vie à vos idées et susciter l’adhésion.
                                
                                Vous ne vous contenterez pas seulement d’obtenir un résultat agréable à l’œil : vous saurez constamment vous mettre à la place de l’utilisateur pour imaginer comment celui-ci va comprendre et utiliser l’application. Au-delà d’une dimension esthétique, votre travail consistera donc à concevoir un chemin d’interaction que l’utilisateur trouvera le plus ergonomique possible : immédiatement clair et sans friction.
                                
                                Suivez cette formation en ligne pour obtenir le diplôme “Chef de projet multimédia”* enregistré au RNCP, de niveau II reconnu par l’État (équivalent au niveau Bac+3/4). Ce diplôme est délivré par ECAD consultants - IESA multimédia.
                                
                                <h3>Pré-requis</h3>
                                Cette formation est accessible à tous. Voici cependant quelques recommandations :
                                
                                Niveau conseillé : Bac ou équivalent
                                Pour les apprenants étrangers, un niveau de français B1-B2 (utilisateur indépendant) est conseillé pour la réussite de la formation.
                                Accès à un ordinateur (PC ou Mac), muni d'un micro, d'une webcam ainsi qu'une bonne connexion internet.
                                Pour accéder au diplôme, vous devrez réaliser tous les projets et les faire valider lors des soutenances, par vos mentors. Votre dossier devra ensuite être validé par le jury du diplôme, composé de professionnels. Si vous en avez besoin, utilisez les cours que nous vous proposons pour vous préparer aux projets.
                                
                                <h3>Ce que vous saurez faire</h3>
                                Analyser les besoins et objectifs d’un client lors d’un rendez-vous ou appel à projets
                                Rédiger une proposition sous la forme d’un cahier des charges
                                Soutenir votre proposition lors d’une présentation au client
                                Piloter un projet dans le respect du planning et du budget
                                Élaborer un rétro-planning et un échéancier
                                Rédiger un cahier des charges technique et fonctionnel
                                Animer des réunions de suivi et de cadrage
                                Travailler en équipe avec une méthodologie de gestion de projet
                                Communiquer avec le client pour effectuer une proposition commerciale
                                Prendre en compte les besoins des utilisateurs dans un contexte global pour y répondre de façon adaptée grâce à la maîtrise du design thinking et des outils de la suite Adobe : Photoshop, Premiere, Illustrator et Experience Design
                                Engager émotionnellement les utilisateurs finaux en offrant une expérience positive
                                Concevoir une maquette de site web adaptée à différents terminaux (ordinateur, tablette, smartphone) ou d’application mobile selon les bonnes pratiques en matière d’expérience utilisateur
                                Quels métiers pourrez-vous exercer ?
                                Ce parcours donne accès aux métiers suivants :
                                
                                Chef de projet multimédia (plusieurs milliers d’offres d'emploi sur RemixJobs, Alsacréations, Indeed)
                                Chef de projet digital (plus de 600 offres d'emploi sur RemixJobs, Alsacréations, Indeed)
                                Chef de projet web mobile
                                Concepteur-réalisateur multimédia
                                UX designer
                                Webdesigner
                                Vous pourrez exercer dans les agences web, de communication ou publicité, des start-ups, des PME, des grandes sociétés ou encore sous le statut d’auto-entrepreneur.
                                
                                 
                                
                                
                                
                                <h3>Diplôme</h3>
                                OpenclassNamerooms est un établissement privé d'enseignement à distance déclaré au rectorat de l'Académie de Paris, délivrant ses propres diplômes ainsi que ceux d'autres partenaires académiques prestigieux.
                                
                                À l'issue de votre formation et de la validation de vos compétences par le jury du diplôme, vous pourrez obtenir le diplôme "Chef(fe) de projet multimédia" enregistré au Répertoire National des Certifications Professionnelles.
                                
                                Ce diplôme est de niveau Bac+3/4, c'est-à-dire de niveau 6 sur le Cadre Européen des Certifications (European Qualifications Framework) et de niveau 2 sur le cadre français. Grâce au processus de Bologne signé par 50 pays, ce diplôme est d'un niveau reconnu internationalement par tous les pays participants et notamment en Europe.
                                
                                Si vous avez des questions à propos de son équivalence pour poursuivre vos études, contactez votre université ou école dans laquelle vous voulez continuer après le diplôme.
                                
                                Si vous avez déjà au moins 1 an d'expérience professionnelle dans ce métier, vous pouvez obtenir plus rapidement ce diplôme grâce à une Validation des Acquis de l'Expérience (VAE). En savoir plus
                        </p>
                    </div>
                </div>
                <hr />
                <div className="row comments-module">
                        <div className="container">
                            <div className="row col-md-12">
                                <h3>3 commentaires</h3>
                            </div>
                            <br /><br />
                                <div className="single-comment">
                                <div className="row">
                                    <div className="col-md-9">
                                      <h5>Baptiste Iafrate</h5>
                                    </div>
                                    <div className="col-md-3 comments-date">
                                            <p>3 décembr /e 2018</p>
                                          </div>
                                </div>
                               
                                <div className="row col-md-9 comment text-justify">
                                    <p>Started looking on Udemy to beef up my web development skills since almost every job I see has "AngularJS experience preferred" or "React/Redux experience preferred". This course taught me everything I would need to know to be able to apply these skills in the real world and feel confident using Angular and React in a professional setting. Filip takes his time and makes sure you understand all the code that is written while also explaining the fundamental concepts behind Angular and React.</p>

                                </div>
                            </div>
                                <div className="single-comment">
                                <div className="row">
                                        <div className="col-md-9">
                                          <h5>Paul Crussaire</h5>
                                        </div>
                                        <div className="col-md-3 comments-date">
                                                <p>3 décembr /e 2018</p>
                                              </div>
                                    </div>
                                   
                                    <div className="row col-md-9 comment text-justify">
                                        <p>Started looking on Udemy to beef up my web development skills since almost every job I see has "AngularJS experience preferred" or "React/Redux experience preferred". This course taught me everything I would need to know to be able to apply these skills in the real world and feel confident using Angular and React in a professional setting. Filip takes his time and makes sure you understand all the code that is written while also explaining the fundamental concepts behind Angular and React.</p>
    
                                    </div>
                                </div>
                                    <div className="single-comment">
                                    <div className="row">
                                            <div className="col-md-9">
                                              <h5>Matthieu Lallaï</h5>
                                            </div>
                                            <div className="col-md-3 comments-date">
                                                    <p>3 décembr /e 2018</p>
                                                  </div>
                                        </div>
                                       
                                        <div className="row col-md-9 comment text-justify">
                                            <p>Started looking on Udemy to beef up my web development skills since almost every job I see has "AngularJS experience preferred" or "React/Redux experience preferred". This course taught me everything I would need to know to be able to apply these skills in the real world and feel confident using Angular and React in a professional setting. Filip takes his time and makes sure you understand all the code that is written while also explaining the fundamental concepts behind Angular and React.</p>
        
                                        </div>
                                    </div>                                    

                            </div>

                </div>

                </div> 
            </section>
        </div>
    )
          
    }
}

Course.propTypes = {
    getCourseById: PropTypes.func.isRequired,
    course: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    course: state.course
});

export default connect(mapStateToProps, { getCourseById }) (Course);