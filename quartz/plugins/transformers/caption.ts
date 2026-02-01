import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"
import { Element } from "hast"

export const ImageCaption: QuartzTransformerPlugin = () => {
  return {
    name: "ImageCaption",
    htmlPlugins() {
      return [
        () => {
          return (tree, file) => {
            visit(tree, "element", (node, index, parent) => {
              // 1. Check if it's an image not already in a figure
              if (node.tagName === "img" && parent && parent.tagName !== "figure") {
                
                // 2. Get the raw alt text
                let alt = node.properties?.alt as string || ""
                
                // 3. Define Regex to capture |width or |widthxheight at the end
                // Example matches: "|100", "|300x200"
                const dimensionRegex = /\|(\d+)(?:x(\d+))?$/
                const match = alt.match(dimensionRegex)

                // 4. Extract dimensions and clean the alt text
                if (match) {
                  const width = match[1]
                  const height = match[2] // This might be undefined if no 'x' present

                  // Apply width/height to the img node properties
                  // This ensures the browser actually resizes the image
                  if (width) node.properties.width = width
                  if (height) node.properties.height = height

                  // Remove the "|100" part from the string so it doesn't show in the caption
                  alt = alt.replace(dimensionRegex, "")
                  
                  // Update the img alt tag to be the clean version
                  node.properties.alt = alt
                  node.properties.class = "captioned-image"
                }

                // 5. If, after cleaning, the alt text is empty (e.g. ![|300](...)), 
                // stop here. We resized the image, but we don't need a caption box.
                if (!alt || alt.trim() === "") return

                // 6. Create the structure
                const figcaption: Element = {
                  type: "element",
                  tagName: "figcaption",
                  
                  properties: {class: "image-caption"},
                  children: [{ type: "text", value: alt }],
                }

                const figure: Element = {
                  type: "element",
                  tagName: "figure",
                  properties: {class: "image-with-caption"},
                  children: [node, figcaption],
                }

                // 7. Replace the node
                parent.children[index!] = figure
              }
            })
          }
        },
      ]
    },
  }
}