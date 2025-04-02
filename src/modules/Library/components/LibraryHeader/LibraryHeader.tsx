import { useState } from "react";
function LibraryHeader({activeTab, setActiveTab}: {activeTab: string, setActiveTab: (tab: string) => void}) {
  const tabs = ["subjects", "chapters", "recording", "favorite"];

  const [activeIndex, setActiveIndex] = useState(tabs.indexOf("subjects"));
  function handleClickTab(tab: string) {
    setActiveTab(tab);
    setActiveIndex(tabs.indexOf(tab));
  }
  
  return (
    <div className="nav-bar">
    <div className="buttons">
      <button
        className={activeTab === "subjects" ? "colored" : ""}
        onClick={() => handleClickTab("subjects")}
      >
        Subjects
      </button>
      <button
        className={activeTab === "chapters" ? "colored" : ""}
        onClick={() => handleClickTab("chapters")}
      >
        Chapters
      </button>
      <button
        className={activeTab === "recording" ? "colored" : ""}
        onClick={() => handleClickTab("recording")}
      >
        Recording
      </button>
      <button
        className={activeTab === "favorite" ? "colored" : ""}
        onClick={() => handleClickTab("favorite")}
      >
        Favorite
      </button>
    </div>
    <span style={{ left: `${40 + activeIndex * 100.234}px` }}></span>
  </div>
  )
}

export default LibraryHeader
