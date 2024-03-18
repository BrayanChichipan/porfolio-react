import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const News = () => {


  return (
    <>
      <div className="row">
        <div className="col-md-6 m-15px-tb">
          <div className="blog-grid">
            <div className="blog-img">
                <img src={`img/blog/pets_portfolio.png`} alt="blog post"></img>
            </div>
            <div className="blog-info">
              <div className="meta">NextJS - NestJS</div>
              <h6>
              
                  FirstPet - A wep app for pet lovers and pet owners. It'pet store.
                
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-1 */}

        <div className="col-md-6 m-15px-tb">
          <div className="blog-grid" >
            <div className="blog-img">
            
                <img src={`img/blog/travel-app-portfolio.png`} alt="blog post"></img>
              
            </div>
            <div className="blog-info">
              <div className="meta">NextJS - Node</div>
              <h6>
              
                  Travel App - A web app for travelers and travel agency.  
                
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-2 */}

        <div className="col-md-6 m-15px-tb">
          <div className="blog-grid" >
            <div className="blog-img">
            
                <img src={`img/blog/pos-porfolio.png`} alt="blog post"></img>
              
            </div>

            <div className="blog-info">
              <div className="meta">Tauri - React - SQLite</div>
              <h6>
              
                  POS - React tauri app for point of sale.
                
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-3 */}

        {/* End .col for blog-4 */}
      </div>
      {/* End  Modal for Blog-3 */}

      {/* Start Modal for Blog-4 */}
      {/* <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog-1.jpg" alt="blog post"></img>
                </div>
                <article className="article">
                  <div className="article-title">
                    <h2>
                      They Now Bade Farewell To The Kind But Unseen People
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/testimonial/team-4.jpg" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY SVEIL</label>
                        <span>22 JAN 2020</span>
                      </div>
                    </div>
                  </div>

                  <div className="article-content">
                    <p>
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem. Adipiscing
                      veni amet luctus enim sem libero tellus viverra venenatis
                      aliquam. Commodo natoque quam pulvinar elit.
                    </p>
                    <p>
                      Eget aenean tellus venenatis. Donec odio tempus. Felis
                      arcu pretium metus nullam quam aenean sociis quis sem
                      neque vici libero. Venenatis nullam fringilla pretium
                      magnis aliquam nunc vulputate integer augue ultricies
                      cras. Eget viverra feugiat cras ut. Sit natoque montes
                      tempus ligula eget vitae pede rhoncus maecenas
                      consectetuer commodo condimentum aenean.
                    </p>
                    <h4>What are my payment options?</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <blockquote>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <p className="blockquote-footer">
                        Someone famous in{" "}
                        <cite title="Source Title">Dick Grayson</cite>
                      </p>
                    </blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  <ul className="nav tag-cloud">
                    <li href="#">Design</li>
                    <li href="#">Development</li>
                    <li href="#">Travel</li>
                    <li href="#">Web Design</li>
                    <li href="#">Marketing</li>
                    <li href="#">Research</li>
                    <li href="#">Managment</li>
                  </ul>
                </article>

                <div className="contact-form article-comment">
                  <h4>LeavReply</h4>
                  <Contact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal> */}
      {/* End  Modal for Blog-4 */}
    </>
  );
};

export default News;
