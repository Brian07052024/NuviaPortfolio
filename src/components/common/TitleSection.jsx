function TitleSection({spanText, h2Text}) {
    return (
        <div className="flex flex-col items-center md:items-start gap-2 mb-8">
            <div className="inline-flex items-center gap-2">
                <div className="w-8 h-1 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full"></div>
                <span className="text-sm font-bold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent uppercase tracking-wider">
                    {spanText}
                </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left">
                {h2Text}
            </h2>
        </div>
    );
}

export default TitleSection;
