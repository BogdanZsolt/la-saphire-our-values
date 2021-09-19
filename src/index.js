import "./index.scss"
import {TextControl, TextareaControl, Flex, FlexItem} from "@wordpress/components"

wp.blocks.registerBlockType("ourplugin/la-saphire-our-values", {
  title: "La Saphire Our Values",
  icon: "smiley",
  category: "common",
  attributes: {
    skyColor: { type: "string" },
    grassColor: { type: "string" },
    titles: {
      type: "array",
      default: [
        "All natural skin care",
        "Manufacture of small batches",
        "Beauty with intent",
        "Reliability",
      ],
    },
    contents: {
      type: "array",
      default: [""],
    },
  },
  edit: EditComponent,
  save: function (props) {
    return null;
  },
});

function EditComponent (props) {
  return (
    <>
      <Flex className="lsov-edit-block">
      {props.attributes.titles.map(function(title, index){
        return (
          <FlexItem className="lsov-col">
            <TextControl label="title" value={title} onChange={newTitle => {
              const newTitles = props.attributes.titles.concat([])
              newTitles[index] = newTitle
              props.setAttributes({titles: newTitles})
            }} />
            <TextareaControl label="content" value={props.attributes.contents[index]} onChange={newContent => {
              const newContents = props.attributes.contents.concat([])
              newContents[index] = newContent
              props.setAttributes({contents: newContents})
            }}/>
          </FlexItem>
        );
      })}
      </Flex>
    </>
  );
}
