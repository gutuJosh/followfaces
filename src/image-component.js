import image from "./m_over.jpg";

const docFrag = document.createDocumentFragment();
const img = document.createElement("img");
img.src = image;
const stripHolder = document.createElement("div");
stripHolder.className = "strip-holder";
stripHolder.appendChild(img);
docFrag.appendChild(stripHolder);
document.body.appendChild(docFrag)