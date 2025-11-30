import React, { useRef, useEffect } from "react";
import { createRoot } from "react-dom/client";

interface IframeDemoProps {
  height?: number;
  children: React.ReactNode;
  title?: string;
}

/**
 * IframeDemo组件
 * 用于在iframe中展示使用fixed定位的组件，避免影响整个页面
 */
const IframeDemo: React.FC<IframeDemoProps> = ({
  height = 300,
  children,
  title = "Demo",
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // 初始化iframe内容
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const onLoad = () => {
      const iframeDoc = iframe.contentDocument;
      if (!iframeDoc) return;

      // 注入主应用的样式
      const mainStyles = Array.from(
        document.head.querySelectorAll('style, link[rel="stylesheet"]')
      );

      mainStyles.forEach((style) => {
        const clone = style.cloneNode(true);
        iframeDoc.head.appendChild(clone);
      });

      // 创建容器
      const container = iframeDoc.createElement("div");
      container.className = "demo-container";
      iframeDoc.body.appendChild(container);

      // 渲染React组件
      const root = createRoot(container);
      root.render(children);
    };

    iframe.addEventListener("load", onLoad);
    return () => iframe.removeEventListener("load", onLoad);
  }, [children]); // Added children to dependency array

  // 当状态变化时更新iframe内容
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe || !iframe.contentDocument) return;

    const container = iframe.contentDocument.querySelector(".demo-container");
    if (!container) return;

    const root = createRoot(container);
    root.render(children);
  }, [children, height]);

  return (
    <iframe
      title={title}
      ref={iframeRef}
      srcDoc="<!DOCTYPE html><html><head></head><body></body></html>"
      style={{
        width: "100%",
        height: `${height}px`,
        border: "none",
        borderRadius: "8px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
      sandbox="allow-same-origin allow-scripts"
    />
  );
};

export default IframeDemo;
