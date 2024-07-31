export const Footer = () => {
  return (
    <div className="px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
      <div className="flex items-center gap-4">
        <img src="/astana_hub.png" className="w-8 h-auto md:w-12"/>
        <p className="text-slate-500 text-left md:text-left">
          iRocket является участником Цифрового технопарка Astana Hub
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 ml-12">
        <a href="/policy" className="text-slate-500 hover:text-primary text-left md:text-left">
          Политика конфиденциальности
        </a>
        <a href="/terms" className="text-slate-500 hover:text-primary text-left md:text-left">
          Публичная оферта
        </a>
        <a href="/cookies_policy" className="text-slate-500 hover:text-primary text-left md:text-left">
          Политика использования cookies
        </a>
      </div>
    </div>
  );
};
