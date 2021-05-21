// Import React
import React from 'react';

// Import Style
import '../../style/PostPage.css';

// Import Components
import Header from '../header/Header';

// Export Component
export default function PostPage() {
    return (
        <div id="post-page">
            <Header />
            <div className="post-info">
                <h2 className="post-title-page">Post Name</h2>
                <hr />
                <div className="center-image"><img src="https://assets-es.imgfoot.com/marco-reus-2021-60055e5017876.jpg" alt="post" className="post-image-page" /></div>
                <div className="post-date-category-div">
                    <p className="post-category">{"Sports"}</p>
                    <p>|</p>
                    <p className="post-date">{"2021/05/20"}</p>
                </div>
                <div className="center-content"><p className="post-content-page">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea consequuntur maxime atque molestiae rerum nihil, perspiciatis necessitatibus vitae eius sapiente corrupti quidem error eveniet debitis similique reiciendis quis labore aspernatur obcaecati quod dolor dolorem nobis ratione iste! Eos similique laboriosam libero odit ad modi temporibus consequatur, amet, eum harum alias velit! Commodi perspiciatis maiores dolor aut soluta, blanditiis cumque porro quae ullam nihil cum quam delectus culpa, voluptatem magni ipsa, dignissimos id! Illum, repellat mollitia. Eveniet nulla nobis voluptates a et doloribus illo! Rerum incidunt est architecto expedita assumenda voluptates quod quidem molestias repellendus vitae, error animi tempora fugit alias libero perspiciatis iste impedit? Laudantium quaerat odit voluptatum repudiandae soluta animi ipsa quos ullam eaque nihil, temporibus nisi ipsam nam explicabo consectetur facere? Odit corrupti accusamus distinctio modi, repudiandae deserunt impedit officiis, sint delectus minima assumenda qui quisquam. Asperiores reprehenderit hic debitis excepturi unde, est ipsum minus, ut fugiat, optio omnis laborum cumque placeat vel eum. Veniam soluta eaque cumque excepturi accusantium laboriosam consequuntur dolore, sapiente quidem illo minus non ullam praesentium ratione sint vitae voluptate enim hic. Soluta, dolorum labore illum voluptatibus debitis voluptas dolores accusantium in placeat facilis odio! Explicabo aspernatur vitae atque quo ullam sunt vero perferendis dolores labore placeat. Eveniet cumque vero mollitia sequi sint nulla, molestias ducimus doloribus perferendis quibusdam porro impedit? Eveniet sunt labore explicabo voluptas sequi amet iure deserunt. Minima illum repellendus incidunt hic, sapiente veritatis doloremque eaque exercitationem beatae velit eos pariatur iure nobis nesciunt tempore, molestias molestiae et odio itaque placeat in ducimus. Libero voluptates eos, quo, quaerat quos possimus doloremque enim distinctio hic voluptatibus similique, eaque inventore numquam dolore. Reiciendis nostrum dolores facere cumque voluptate, dolore harum repudiandae provident sed, voluptatem sequi accusantium iure eos obcaecati inventore odit, ad assumenda ipsa minima officiis! Placeat recusandae, expedita dicta veritatis voluptatum rerum!</p></div>
            </div>
        </div>
    )
}
