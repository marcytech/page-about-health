import { html, css } from "iares";
import { UContainer } from "@/components/Units";
import { UTitle } from "@/components/Units";
import { FamButton } from "fam-code-ui";
import { UImageArticle } from '../../Units/ImageArticle/index';

import { mediaQueries } from "@/services/mediaQueries";

const media = mediaQueries();


const template = () => html`
  <${UContainer}> 
    <slot target="content" ctx="f-article">
      <div class="grid grid-cols-12">
        <div class="
          xxl-col-5
          xl-col-6
          lg-col-6
          sm-col-6
          xs-col-12
        ">
          <div class="title-ctx">
            <${UTitle}
              title='Latest articles aboyt mental health'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptatem.'
            />    
          </div>
        </div>      
        <div class="
          xxl-col-start-10 xxl-col-end-13
          xl-col-6
          lg-col-6
          sm-col-6
          xs-col-12
        ">
          <div class="button-ctx">
            <${FamButton}>
              <slot target="content">
                <span type="tertiary-hole">
                  <i>Read all article</i>
                </span>
              </slot>
            </>      
          </div>
        </div>    
        <div class="
          xxl-col-4
          xl-col-6
          lg-col-6
          sm-col-12
          xs-col-12
        ">        
          <${UImageArticle}
          type="h3"
          image='assets/images/ioga.png'
          text="April 02,2021"
          title='06 ways to do workout inside your home during Covid-19'
          />
        </div>    
        <div class="
          xxl-col-4
          xl-col-6
          lg-col-6
          sm-col-12
          xs-col-12
          ">        
            <${UImageArticle}
            type="h3"
            image='assets/images/terapia.png'
            text="March 26,2024"
            title='The parents balancing act:usng the word'No''
            />
          </div>    
          <div class="
            xxl-col-4
            xl-col-6
            lg-col-6
            sm-col-12
            xs-col-12
          ">        
            <${UImageArticle}
            type="h3"
            image='assets/images/consulta.png'
            text="March 26,2021"
            title='How is the pandemic affecting the way people work'
            />
          </div>    
        </div>    
      </slot>
  </>
 `;
            
export const FArticle = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  f-article,
  .title-ctx,
  .button-ctx {
    display: flex;
    width:100%;
    padding:3em 0;
  }

  .button-ctx {
    position: relative;
    top:97px;
    right:0;
  }

  ${media.sm(css`

    .title-ctx,
    .button-ctx {
      padding:0;
    }  
    .button-ctx {
      position: relative;
      right:0;
      top:-60px;
    }
  `)}  

  ${media.xs(css`

    .title-ctx,
    .button-ctx {
      justify-content:center;
      padding:0;
    }  
    .button-ctx {
      position: relative;
      right:0;
      top:-60px;
    }
  `)}  


`;
