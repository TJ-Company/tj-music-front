// useAudio.js — с подробным логированием ошибок
import { useEffect, useRef, useState } from "react";

export const useAudio = (src) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("🎵 Создаем аудио с src:", src);
    console.log("📁 Тип src:", typeof src);

    if (!src) {
      console.error("❌ src не передан!");
      setError("Не указан источник аудио");
      return;
    }

    const audio = new Audio();
    audioRef.current = audio;
    audio.src = src;
    audio.preload = "metadata";

    // Детальная обработка ошибок
    const handleError = (e) => {
      console.log("🔥 Событие error сработало!");
      console.log("📋 Объект события:", e);

      const mediaError = audio.error;
      console.log("📋 mediaError:", mediaError);

      if (mediaError) {
        console.log("🔴 Код ошибки (code):", mediaError.code);
        console.log("🔴 Сообщение (message):", mediaError.message);
        console.log("🔴 Медиа-группа (mediaGroup):", mediaError.mediaGroup);
        console.log("🔴 MSMediaKeys (msMediaKeys):", mediaError.msMediaKeys);

        // Расшифровка кода ошибки
        let errorMessage = "";
        switch (mediaError.code) {
          case MediaError.MEDIA_ERR_ABORTED: // 1
            errorMessage = "Загрузка прервана пользователем";
            break;
          case MediaError.MEDIA_ERR_NETWORK: // 2
            errorMessage = "Сетевая ошибка при загрузке (проверьте соединение)";
            break;
          case MediaError.MEDIA_ERR_DECODE: // 3
            errorMessage =
              "Ошибка декодирования (файл поврежден или не поддерживается)";
            break;
          case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED: // 4
            errorMessage = "Формат файла не поддерживается браузером";
            break;
          default:
            errorMessage = `Неизвестная ошибка (код ${mediaError.code})`;
        }

        console.error("❌ Расшифрованная ошибка:", errorMessage);
        setError(errorMessage);
      } else {
        console.error("❌ mediaError отсутствует, но событие error вызвано");
        setError("Неизвестная ошибка загрузки");
      }

      setLoading(false);
    };

    // Успешная загрузка
    const handleLoad = () => {
      console.log("✅ Аудио успешно загружено!");
      console.log("📊 Длительность:", audio.duration);
      console.log("📊 Размер буфера:", audio.buffered?.length);
      setLoading(false);
      setError(null);
    };

    // Когда метаданные загружены
    const handleLoadedMetadata = () => {
      console.log("📊 Метаданные загружены:");
      console.log("  - Длительность:", audio.duration, "сек");
      console.log("  - readyState:", audio.readyState);
      console.log("  - networkState:", audio.networkState);
      setDuration(audio.duration);
    };

    // Прогресс загрузки
    const handleProgress = () => {
      if (audio.buffered.length > 0) {
        const buffered = audio.buffered.end(0);
        const duration = audio.duration;
        const percent = (buffered / duration) * 100;
        console.log(`📥 Загружено: ${Math.round(percent)}%`);
      }
    };

    // Отслеживаем состояние готовности
    const handleCanPlay = () => {
      console.log("🎯 Аудио готово к воспроизведению (canplay)");
      setLoading(false);
    };

    const handleCanPlayThrough = () => {
      console.log("🎯 Аудио полностью загружено (canplaythrough)");
    };

    // Подписываемся на все события
    audio.addEventListener("error", handleError);
    audio.addEventListener("load", handleLoad);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("progress", handleProgress);
    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("canplaythrough", handleCanPlayThrough);
    audio.addEventListener("loadstart", () =>
      console.log("⏳ Начало загрузки..."),
    );
    audio.addEventListener("suspend", () =>
      console.log("⏸️ Загрузка приостановлена"),
    );
    audio.addEventListener("stalled", () => console.log("⚠️ Загрузка зависла"));

    return () => {
      console.log("🧹 Очищаем аудио");
      audio.removeEventListener("error", handleError);
      audio.removeEventListener("load", handleLoad);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("progress", handleProgress);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("canplaythrough", handleCanPlayThrough);
      audio.pause();
      audio.src = "";
    };
  }, [src]);

  const togglePlay = () => {
    const audio = audioRef.current;
    console.log("🔄 togglePlay вызван");
    console.log("🎯 Состояние audio:", audio);
    console.log("🎯 src:", audio?.src);
    console.log("🎯 error:", audio?.error);
    console.log("🎯 readyState:", audio?.readyState);

    if (!audio) {
      console.error("❌ audio не существует!");
      return;
    }

    if (error) {
      console.error("❌ Нельзя воспроизвести из-за ошибки:", error);
      return;
    }

    if (isPlaying) {
      console.log("⏸️ Ставим на паузу");
      audio.pause();
      setIsPlaying(false);
    } else {
      console.log("▶️ Начинаем воспроизведение");
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("✅ Воспроизведение начато успешно");
            setIsPlaying(true);
          })
          .catch((err) => {
            console.error("❌ Ошибка play():", err);
            console.error("❌ Имя:", err.name);
            console.error("❌ Сообщение:", err.message);
            console.error("❌ Код:", err.code);

            // Дополнительная диагностика
            console.log("📋 Состояние audio при ошибке:");
            console.log("  - error:", audio.error);
            console.log("  - readyState:", audio.readyState);
            console.log("  - networkState:", audio.networkState);
            console.log("  - src:", audio.src);
            console.log("  - currentSrc:", audio.currentSrc);

            setError(`Ошибка воспроизведения: ${err.message}`);
            setIsPlaying(false);
          });
      }
    }
  };

  const seek = (percent) => {
    const audio = audioRef.current;
    if (audio && duration && !error) {
      audio.currentTime = (percent / 100) * duration;
    }
  };

  return {
    isPlaying,
    progress,
    duration,
    togglePlay,
    seek,
    error,
    loading,
  };
};
