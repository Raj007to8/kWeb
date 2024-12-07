import { useEffect, useState } from 'react';

export function useTextLines(text: string, fontSize: string, fontWeight: string) {
  const [lines, setLines] = useState<string[]>([text]);

  useEffect(() => {
    // Create measurement container
    const measureContainer = document.createElement('div');
    measureContainer.style.position = 'absolute';
    measureContainer.style.visibility = 'hidden';
    measureContainer.style.whiteSpace = 'nowrap';
    measureContainer.style.fontSize = fontSize;
    measureContainer.style.fontWeight = fontWeight;
    measureContainer.style.fontFamily = "'Hind', sans-serif";
    document.body.appendChild(measureContainer);

    const words = text.split(' ');
    const containerWidth = window.innerWidth * 0.8; // 80% of viewport width
    let currentLine: string[] = [];
    const resultLines: string[] = [];

    words.forEach((word) => {
      const testLine = [...currentLine, word].join(' ');
      measureContainer.textContent = testLine;
      
      if (measureContainer.offsetWidth > containerWidth && currentLine.length > 0) {
        resultLines.push(currentLine.join(' '));
        currentLine = [word];
      } else {
        currentLine.push(word);
      }
    });

    if (currentLine.length > 0) {
      resultLines.push(currentLine.join(' '));
    }

    document.body.removeChild(measureContainer);
    setLines(resultLines);
  }, [text, fontSize, fontWeight]);

  return lines;
}