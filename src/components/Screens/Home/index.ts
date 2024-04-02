import { html, css } from "iares";
import { FAppointment, FArticle, FHeader } from "@/components/Frames";
import { FBanner } from "@/components/Frames/Banner";
import { UContext } from "@/components/Units/Context";
import { FSnippets } from "@/components/Frames/Snippets";
import { FFormSection } from "@/components/Frames/FormSection";

const template = () => html`
  <${FHeader}/>
  <${FBanner}/>
  <${UContext}/>
  <${FSnippets}/>
  <${FAppointment}/>
  <${FFormSection}/>
  <${FArticle}/>
`;

export const SHome = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  s-home,
  .wrap-ctx {
    display: flex;
    width:100%;
    flex-wrap: wrap; 
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
