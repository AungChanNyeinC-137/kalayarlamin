import { WindowConrtols } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window';
import React from 'react'

const Achievement = () => {
  const { windows } = useWindowStore();
  return (
    <>
      <div id="window-header">
        <WindowConrtols target="achievement" />
        <h2>Achievements</h2>
      </div>
      <div className="p-5 space-y-5">
       achievements coming soon...
      </div>
    </>
  );
};

const AchievementWindow = WindowWrapper(Achievement, "achievement");
export default AchievementWindow;