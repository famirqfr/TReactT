import React from "react";
import data from "../data.json";
import { Element } from "react-scroll";
import DownIcon from "./DownIcon";

function Section() {
  
  return (
    <>
      {data.Sections.map((section, key) => {
        const nextItem = data.Sections[key + 1];
        return (
          <div key={key}>
            <Element
              name={`Element${section.Title}`}
              
              className="full-page"
            >
              <h3 className="section-title text-left">{section.Title}</h3>
              <div className="skills-item">
                {section.Items.map((item, itemKey) => {
                  if (typeof item.Content == "object") {
                    const CustomTag = item.Type;
                    return (
                      <CustomTag key={itemKey}>
                        <img src={item.Content.Url} alt={`${item.Content.Title}`}/>
                        <div className="contet-body">
                          <h4>{item.Content.Title}</h4>
                          <p>{item.Content.Description}</p>
                          <div className="skills-container">
                            <div
                              className="skills"
                              style={{ width: item.Content.Persent }}
                            >
                              {item.Content.Persent}
                            </div>
                          </div>
                        </div>
                      </CustomTag>
                    );
                  } else {
                    return (
                      <div key={itemKey}>
                        <p className="text-hover text-justify">
                          {item.Content}
                        </p>
                      </div>
                    );
                  }
                })}
              </div>
            </Element>

            {nextItem ? <DownIcon up={false} to={`Element${nextItem.Title}`}/> : <DownIcon up={true} to={`ElementMain`}/>}
          </div>
        );
      })}
    </>
  );
}

export default Section;
