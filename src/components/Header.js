import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Badge } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class Header extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      modal: false,
	      username: ""
	    };

	    this.toggle = this.toggle.bind(this);
	}

  	toggle() {
    	this.setState({
      		modal: !this.state.modal
    	});
  	}

  	componentDidMount() {
        this.UserList();
    }

    UserList() {
        fetch(`http://localhost:3000/api/v1/user`)
        .then(response => response.json())
        .then(json => {
        	var name = "";
            json.map(function(data) {
            	name = data.name
            });
            this.setState({
                username : name
            })
        });
    }
    
    render() {
    	const styles = 
    	{
			menu:
			{
				"position":"fixed",
				"top":"0px",
				"right":"0px",
				"left":"0px",
				"background":"linear-gradient(0deg, rgb(179, 179, 179), rgb(179, 179, 179) 49%, transparent 51%) center bottom / 100% 0.1rem no-repeat rgb(255, 255, 255)"
				,"zIndex":"777"
			},
			sub_menu:{
				"maxWidth":"50.4rem",
				"margin":"0px auto"
			},
			sub_menu_child: {
				display: "table", 
				width: "100%"
			},
			sub_menu_child_1 : {
				"display":"table",
				"width":"100%",
				"flex":"0 1 0%"
			},
			a_header: {
				"display":"table-cell",
				"verticalAlign":"middle",
				"padding":"1rem 0px",
				"color":"rgb(51, 51, 51)",
				"textAlign":"center",
				"textDecoration":"none",
				"position":"relative",
				"minWidth":"4.4rem",
				"cursor":"pointer",
				"width":"100%"
			},
			b_header: {
				"width":"2.4rem",
				"height":"2.4rem",
				"margin":"0px auto",
				"position":"relative",
				"pointerEvents":"none"
			},
			c_header: {
				"width":"2.4rem",
				"height":"2.4rem",
				"backgroundSize":"100%",
				"backgroundPosition":"0px 0px",
				"backgroundImage":"url(&quot;https://www.salestockindonesia.com/assets/images/icons/icon-more-line-black-80-afd8199a.png&quot;)"
			},
			spacing: {
				"display":"table-cell",
				"verticalAlign":"middle",
				"width":"0.1rem",
				"backgroundColor":"transparent",
				"backgroundImage":"linear-gradient(90deg, rgb(225, 225, 225), rgb(225, 225, 225) 49%, transparent 51%)",
				"backgroundPosition":"center bottom",
				"backgroundSize":"0.1rem 100%",
				"backgroundRepeat":"no-repeat",
				"minHeight":"100%",
				"overflow":"hidden"
			},
			sub_menu_child_2: {
				"display":"table-cell",
				"verticalAlign":"middle",
				"width":"100%"
			},
			sub_menu_child_2_a: {
				"display":"block",
				"padding":"0px 1.2rem",
				"overflow":"hidden",
				"whiteSpace":"nowrap",
				"textOverflow":"ellipsis",
				"textDecoration":"none"
			},
			sub_menu_child_2_img: {
				"display":"block",
				"margin":"0px",
				"pointerEvents":"none"
			},
			sub_menu_child_3: {
				"display":"table",
				"width":"100%",
				"flex":"0 1 0%"
			},
			sub_menu_child_3_a_1: {
				"display":"table-cell",
				"verticalAlign":"middle",
				"padding":"1rem 0px",
				"color":"rgb(51, 51, 51)",
				"textAlign":"center",
				"textDecoration":"none",
				"position":"relative",
				"minWidth":"4.4rem",
				"cursor":"pointer",
				"width":"33.3333%"
			},
			sub_menu_child_3_a_1_1: {
				"width":"2.4rem",
				"height":"2.4rem",
				"margin":"0px auto",
				"position":"relative",
				"pointerEvents":"none"
			},
			sub_menu_child_3_a_1_1_1: {
				"width":"2.4rem",
				"height":"2.4rem",
				"backgroundSize":"100%",
				"backgroundPosition":"0px 0px",
				"backgroundImage":"url(&quot;https://www.salestockindonesia.com/assets/images/icons/icon-search-black-80-6b78039e.png&quot;)"
			}
    	}

        return (
            <div style={styles.menu}>
			  	<div style={styles.sub_menu}>
			    	<div style={styles.sub_menu_child}>
			      		<div style={styles.spacing}>&nbsp;</div>
				      	<div style={styles.sub_menu_child_2}>
				        	<a href="/" data-qa-id="qa_salestock_logo_header" data-track-context="SALESTOCK_LOGO_HEADER" style={styles.sub_menu_child_2_a}>
				          		<div>
				            		{/*<img src="https://selena.id/images/selena-logo.svg" alt="Selena" data-track-context="SALESTOCK_LOGO_HEADER" width="119" height="37.75" style={styles.sub_menu_child_2_img} />*/}
				            		<h2><Badge>Savannah</Badge></h2>
				          		</div>
				        	</a>
				      	</div>
				      	<div style={styles.sub_menu_child_3}>
				        	<a data-qa-id="qa_search_button" data-track-context="SEARCH_LINK" style={styles.sub_menu_child_3_a_1} onClick={this.toggle}>
				            	Buat Aktivitas
				        	</a>
				        	<a data-qa-id="qa_search_button" data-track-context="SEARCH_LINK" style={styles.sub_menu_child_3_a_1}>
				            	<h5><Badge>{this.state.username}</Badge></h5>
				        	</a>
					        {/*<a data-qa-id="qa_favourite_button" style="display: table-cell; vertical-align: middle; padding: 1rem 0px; color: rgb(51, 51, 51); text-align: center; text-decoration: none; position: relative; min-width: 4.4rem; cursor: pointer; width: 33.3333%;">
					          <div style="width: 2.4rem; height: 2.4rem; margin: 0px auto; position: relative; pointer-events: none;">
					            <div style="width: 2.4rem; height: 2.4rem; background-size: 100%; background-position: 0px 0px; background-image: url(&quot;https://www.salestockindonesia.com/assets/images/icons/icon-heart-line-black-80-c9e0fb80.png&quot;);">
					            </div>
					          </div>
					        </a>
					        <a data-qa-id="qa_cart_button" data-track-context="CART_LINK" style="display: table-cell; vertical-align: middle; padding: 1rem 0px; color: rgb(51, 51, 51); text-align: center; text-decoration: none; position: relative; min-width: 4.4rem; cursor: pointer; width: 33.3333%;">
					          <div style="width: 2.4rem; height: 2.4rem; margin: 0px auto; position: relative; pointer-events: none;">
					            <div style="width: 2.4rem; height: 2.4rem; background-size: 100%; background-position: 0px 0px; background-image: url(&quot;https://www.salestockindonesia.com/assets/images/icons/icon-cart-line-black-80-1a2b2e1f.png&quot;);">
					            </div>
					          </div>
					        </a>*/}
				      	</div> 
			    	</div>
			  	</div>
		  		<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
	          		<ModalHeader toggle={this.toggle}>Buat Aktivitas</ModalHeader>
	          		<ModalBody>
	            		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	          		</ModalBody>
	          		<ModalFooter>
	            		<Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
	            		<Button color="secondary" onClick={this.toggle}>Cancel</Button>
	          		</ModalFooter>
	        	</Modal>
			</div>
        );
    }
}

