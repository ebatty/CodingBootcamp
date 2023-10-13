Search.setIndex({"docnames": ["content/ArrayComputations", "content/BooleanIndexing", "content/ComparisonandLogicalOperators", "content/ForLoops", "content/IfStatements", "content/Indexing", "content/IntrotoArrays", "content/MathOperators", "content/Plotting", "content/Session1_Asynchronous", "content/Session1_Exercises", "content/Session1_Exercises_Solutions", "content/Session2_Asynchronous", "content/Session2_Exercises", "content/Session2_Exercises_Solutions", "content/Session3_Asynchronous", "content/Session3_Exercises", "content/UsingFunctions", "content/Variables", "intro"], "filenames": ["content/ArrayComputations.ipynb", "content/BooleanIndexing.ipynb", "content/ComparisonandLogicalOperators.ipynb", "content/ForLoops.ipynb", "content/IfStatements.ipynb", "content/Indexing.ipynb", "content/IntrotoArrays.ipynb", "content/MathOperators.ipynb", "content/Plotting.ipynb", "content/Session1_Asynchronous.ipynb", "content/Session1_Exercises.ipynb", "content/Session1_Exercises_Solutions.ipynb", "content/Session2_Asynchronous.ipynb", "content/Session2_Exercises.ipynb", "content/Session2_Exercises_Solutions.ipynb", "content/Session3_Asynchronous.ipynb", "content/Session3_Exercises.ipynb", "content/UsingFunctions.ipynb", "content/Variables.ipynb", "intro.md"], "titles": ["Array Computations", "Boolean Indexing", "Comparison &amp; Logical Operators", "For Loops", "If statements", "Indexing", "Intro to Arrays", "Math Operators", "Plotting", "Session 1 Asynchronous Version", "Session 1 Exercises", "Session 1 Exercises Solutions", "Session 2 Asynchronous Version", "Session 2 Exercises", "Session 2 Exercises Solutions", "Session 3 Asynchronous Version", "Session 3 Exercises", "Using Functions", "Variables", "Introduction"], "terms": {"let": [0, 1, 5, 10, 11], "s": [0, 1, 5, 6, 9, 10, 11, 13, 14, 16, 19], "sai": 0, "we": [0, 1, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19], "have": [0, 1, 5, 9, 10, 11, 13, 14, 16, 17, 18, 19], "an": [0, 1, 5, 7, 9, 10, 11, 13, 14, 16, 17], "2": [0, 1, 2, 3, 4, 5, 6, 7, 10, 11, 17, 18, 19], "row": [0, 1, 5, 8, 10, 11, 13, 14, 16], "3": [0, 1, 2, 4, 5, 6, 7, 8, 10, 11, 12, 17, 19], "column": [0, 1, 5, 8, 10, 11, 13, 14, 16], "can": [0, 1, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], "creat": [0, 1, 5, 6, 8, 10, 11, 16], "follow": [0, 6, 16, 17], "import": [0, 1, 2, 3, 4, 5, 6, 8, 10, 11, 13, 14, 16, 17, 18], "numpi": [0, 1, 3, 5, 6, 8, 10, 11, 13, 14, 16, 17, 19], "np": [0, 1, 2, 3, 5, 6, 8, 10, 11, 13, 14, 16, 17], "x": [0, 1, 2, 3, 5, 6, 7, 8, 9, 13, 14, 16, 17, 18], "1": [0, 1, 2, 3, 4, 5, 6, 7, 17, 18, 19], "0": [0, 1, 2, 3, 5, 8, 10, 11, 13, 14, 16, 17, 18], "4": [0, 1, 2, 3, 4, 5, 6, 8, 10, 17, 19], "shape": [0, 5, 11, 13, 14, 16], "get": [0, 1, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 18], "number": [0, 1, 10, 13, 14, 16, 17, 18], "The": [0, 9, 10, 11, 13, 14, 16, 17], "first": [0, 1, 5, 7, 9, 10, 11, 12, 15, 16], "output": [0, 4, 16], "abov": [0, 8, 16], "second": [0, 5, 8, 9, 10, 11, 13, 14, 16], "also": [0, 1, 8, 16], "minimum": [0, 10, 11], "maximum": [0, 10, 11], "valu": [0, 1, 2, 5, 9, 10, 11, 13, 14, 16, 18], "min": [0, 11], "max": [0, 10, 11, 19], "sum": [0, 17], "over": [0, 1, 5, 10, 11, 13, 14, 16, 19], "all": [0, 1, 8, 10, 13, 14, 19], "mean": [0, 1, 8, 10, 11, 14, 16, 17], "10": [0, 1, 2, 8, 12, 13, 15, 16, 17, 19], "6666666666666667": [0, 7], "might": [0, 9, 13], "want": [0, 6, 9, 10, 11, 13, 14, 16], "per": [0, 1, 10, 11, 13, 14], "instead": [0, 7, 8, 9, 10, 11, 13, 14, 16], "whole": 0, "do": [0, 1, 6, 7, 8, 9, 13, 14, 16, 17, 19], "thi": [0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "code": [0, 6, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "where": [0, 1, 8, 10, 11, 13, 14], "question": [0, 9, 12, 15, 19], "mark": 0, "need": [0, 6, 8, 9, 12, 13, 14, 15, 16, 19], "replac": 0, "ar": [0, 2, 8, 9, 10, 11, 12, 13, 14, 15, 16, 19], "when": [0, 1, 16], "enter": [0, 18], "argument": [0, 8], "command": [0, 8, 16], "ask": [0, 9, 12, 15, 16], "which": [0, 6, 9, 13, 14, 18], "would": [0, 5, 16, 17], "66666667": 0, "If": [0, 5, 8, 10, 11, 15, 16], "you": [0, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], "someth": 0, "like": [0, 5, 9, 10, 11], "math": [0, 9], "oper": [0, 12, 16, 19], "element": 0, "wise": 0, "5": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 14, 16, 17, 18, 19], "ad": 0, "two": [0, 8, 9, 12, 13, 14, 15, 19], "same": [0, 1, 9, 10, 11, 13, 14, 16, 18, 19], "y": [0, 2, 5, 7, 8, 9, 13, 14, 16], "7": [0, 2, 5, 7, 12, 16, 17], "ll": [1, 9, 10, 11, 12, 15], "arrai": [1, 2, 3, 8, 10, 11, 12, 16, 17, 19], "9": [1, 7, 9, 12, 13, 14, 15, 16, 19], "print": [1, 3, 4, 9, 10, 11, 13, 14, 16, 18], "now": [1, 12, 13, 14, 16], "grab": [1, 5], "greater": [1, 2], "than": [1, 2, 6], "ha": [1, 5, 8, 9, 16], "true": [1, 2, 18], "correspond": [1, 16], "entri": [1, 5, 10, 11, 13, 14, 16], "fals": [1, 2, 18], "otherwis": [1, 2, 16, 17], "boolean_arrai": 1, "next": [1, 9, 10, 11, 12, 13, 14, 15, 16], "us": [1, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 19], "back": [1, 9], "note": [1, 9, 12, 16, 19], "lose": 1, "ani": [1, 8, 18], "structur": 1, "term": 1, "those": 1, "occur": [1, 8], "specif": [1, 5, 9, 12, 15], "length": 1, "consist": [1, 13, 18], "compar": [1, 9], "mean_per_row": 1, "axi": [1, 8, 11, 13, 14, 17], "below": [1, 8, 9, 13, 14, 16], "return": [1, 17, 18], "had": 1, "video": [2, 6, 7, 9, 12, 15, 17, 18, 19], "avail": [2, 3, 4, 6, 7, 9, 17, 18], "http": [2, 3, 4, 6, 7, 9, 10, 11, 13, 14, 16, 17, 18], "youtub": [2, 3, 4, 6, 7, 9, 17, 18], "com": [2, 3, 4, 6, 7, 9, 17, 18], "watch": [2, 3, 4, 6, 7, 9, 12, 15, 17, 18, 19], "v": [2, 3, 4, 6, 7, 9, 17, 18], "ubcs30puuwi": 2, "symbol": [2, 7], "descript": [2, 7, 18], "equal": [2, 9, 10, 11, 14, 16], "less": [2, 8], "Not": [2, 16], "type": 2, "bool": 2, "6": [2, 3, 5, 8, 9, 12, 15, 17, 19], "both": [2, 19], "side": 2, "either": [2, 10, 11], "healthi": 2, "size": 2, "11": 2, "nameerror": [2, 10], "traceback": [2, 4, 10], "most": [2, 4, 8, 10, 19], "recent": [2, 4, 10], "call": [2, 4, 9, 10, 11, 13, 14, 16, 17], "last": [2, 4, 10], "tmp": [2, 4, 10, 17], "ipykernel_1888": 2, "2712705792": 2, "py": [2, 4, 10, 17], "modul": [2, 4, 10], "name": [2, 4, 9], "defin": [2, 10], "2228133702": 2, "logical_and": 2, "1200237872": 2, "logical_or": 2, "100696844": 2, "logical_not": 2, "3020037380": 2, "pq3ge_jgxu": 3, "all_x": 3, "13": 3, "15": [3, 7], "16": [3, 9, 17], "i": [3, 9, 13, 14, 16, 18], "20": [3, 8, 10, 11, 18], "21": 3, "25": 3, "arang": [3, 8], "rang": [3, 16, 18], "1myjpiou54a": 4, "modulenotfounderror": 4, "ipykernel_1928": 4, "1199308821": 4, "markdown": [4, 13, 14, 16], "from": [4, 5, 8, 10, 11, 12, 13, 14, 15, 16, 18, 19], "ipython": 4, "displai": [4, 10, 11], "ifram": 4, "ipywidget": 4, "widget": 4, "out": [4, 8, 9, 12, 13, 14, 15, 16, 17, 18], "No": [4, 13, 14], "t": [4, 8, 9, 10, 11, 12, 15, 16, 17], "65": 4, "40": 4, "put": 4, "jacket": 4, "elif": [4, 16, 18], "60": 4, "sweater": 4, "els": [4, 18], "sunglass": 4, "go": [4, 9, 12, 13, 14, 15, 16], "outsid": 4, "8": [5, 9, 13, 14, 15, 16, 17], "data": [5, 6, 8, 9, 12, 16, 19], "point": [5, 6, 13, 16], "multipl": [5, 7, 9], "one": [5, 6, 8, 9, 12, 13, 14, 15, 16, 19], "start": [5, 13, 14, 16, 18], "stop": 5, "inclus": 5, "skip": 5, "certain": 5, "step": [5, 9, 16], "count": [5, 9, 10, 11, 13, 14, 16, 17], "up": [5, 9, 12, 13, 14, 15, 16, 17, 18, 19], "includ": [5, 13, 14], "everi": [5, 10, 11, 16], "In": [5, 6, 8, 9, 14, 16, 18, 19], "other": [5, 13, 14], "word": [5, 13, 14, 18], "so": [5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19], "overwrit": [5, 10, 11, 16], "subset": 5, "our": [5, 9, 10, 11, 12, 15, 16, 18], "100": [5, 8, 16, 17, 18], "far": 5, "ve": [5, 9, 12, 15, 16, 17], "assum": [5, 19], "dimension": 5, "what": [5, 9, 10, 11, 13, 14, 16], "doe": [5, 13], "look": [5, 8, 13, 14], "exampl": [5, 10, 11, 13, 17, 18], "see": [5, 8, 9, 12, 15, 16, 17], "To": [5, 6], "just": [5, 9, 10, 11, 12, 15, 16, 18], "specifi": [5, 8, 17], "bother": 5, "could": [5, 10, 11, 13, 14, 16], "2nd": 5, "jwktgypaznc": 6, "python": [6, 8, 9, 18, 19], "rel": 6, "small": [6, 9, 19], "amount": [6, 13], "core": [6, 9], "present": 6, "notebook": [6, 10, 11], "default": 6, "more": [6, 8, 9, 16, 18], "advanc": [6, 19], "function": [6, 12, 16, 19], "abl": [6, 9, 19], "work": [6, 12, 15, 17, 19], "scientif": [6, 19], "comput": [6, 10, 11, 13, 14, 16, 17, 19], "numer": 6, "d": [6, 9, 10, 11], "line": [6, 13, 14, 17], "dv96o72prma": 7, "addit": [7, 19], "subtract": 7, "divis": [7, 9], "integ": [7, 14], "modulu": 7, "125": [7, 11, 13, 14], "variabl": [7, 10, 11, 13, 14, 16, 19], "too": 7, "left": [7, 10, 11], "right": [7, 10, 11], "prioriti": 7, "parenthes": 7, "expon": 7, "rememb": [7, 9, 12, 15, 16], "pemda": 7, "matplotlib": [8, 10, 11, 13, 14, 16, 19], "pyplot": [8, 10, 11, 13, 14, 16], "plt": [8, 10, 11, 13, 14, 16], "wide": 8, "librari": 8, "although": 8, "definit": 8, "onli": [8, 9, 13, 14, 16], "There": [8, 9, 12, 13, 14, 15], "outlin": 8, "bunch": 8, "make": [8, 9, 10, 11, 12, 13, 14, 15, 16], "custom": 8, "your": [8, 9], "xlabel": [8, 10, 11, 14], "label": [8, 13, 14, 16], "ylabel": [8, 10, 11, 14], "text": [8, 11, 13, 14], "line2d": [8, 14], "0x7fc66c3565d0": 8, "ax": [8, 10, 11, 14, 16], "differ": [8, 9, 10, 11, 13, 14, 16, 18], "whose": 8, "attribut": 8, "easili": [8, 18], "refer": [8, 13, 14, 16, 17], "order": [8, 17], "take": [8, 9, 12, 15, 17, 19], "set": [8, 10, 11, 14], "some": [8, 9, 10, 11, 17, 19], "fig": [8, 10, 11, 14], "how": [8, 10, 11, 13, 14, 16], "titl": [8, 13, 14, 16], "tick": 8, "should": [8, 10, 11, 13, 14, 16, 18, 19], "limit": 8, "separ": 8, "xtick": 8, "xticklabel": 8, "mondai": [8, 9, 12, 15, 19], "fridai": 8, "ylim": 8, "each": [8, 9, 10, 11, 13, 14, 16, 19], "linestyl": 8, "marker": 8, "o": [8, 14], "color": 8, "r": [8, 10, 11, 13, 14, 16], "linewidth": 8, "shortcut": 8, "hex": 8, "1ec2a0": 8, "0x7fc66ca97310": 8, "option": [8, 14, 16], "after": [8, 9, 16, 19], "ok": 8, "og": 8, "0x7fc66c1404d0": 8, "while": [8, 9, 18], "0x7fc66cab3050": 8, "figsiz": 8, "0x7fc667f88ad0": 8, "savefig": 8, "test": 8, "pdf": 8, "random": [8, 18], "randn": 8, "im": [8, 14], "imshow": [8, 10, 11, 14], "cmap": [8, 10, 11, 14], "grai": [8, 10, 11, 14], "colorbar": [8, 13, 14], "0x7fc65f293cd0": 8, "reshaped_i": 8, "reshap": [8, 14], "hist": [8, 14], "bin": [8, 10, 11, 13, 14, 16, 17], "yerr": 8, "barcontain": 8, "artist": 8, "errorbar": 8, "errorbarcontain": 8, "fill_between": 8, "alpha": 8, "collect": 8, "polycollect": 8, "0x7fc65ebd4c10": 8, "nrow": 8, "ncol": 8, "set_titl": 8, "hello": [8, 9, 12, 15], "tight_layout": 8, "layout": 8, "still": [8, 19], "doesn": 8, "nice": 8, "try": [8, 9, 12, 13, 14, 15, 16, 18], "proport": 8, "suit": [8, 10, 11], "ensur": 8, "thei": [8, 10, 11, 13, 14], "re": [8, 16], "squar": [8, 9], "complic": [8, 10, 11], "arrang": 8, "grid": 8, "add_gridspec": 8, "ax1": 8, "add_subplot": 8, "ax2": 8, "base": 8, "higher": 8, "level": 8, "statist": [8, 19], "visual": [8, 19], "It": [8, 9, 12, 15], "especi": [8, 16], "plai": 8, "well": 8, "panda": 8, "page": [9, 12, 15], "design": [9, 12, 15], "surfin": [9, 12, 15, 19], "fellow": [9, 12, 15, 19], "who": [9, 12, 15], "were": [9, 12, 13, 14, 15], "unabl": [9, 12, 15], "live": [9, 12, 15, 19], "09": [9, 19], "28": [9, 17, 19], "through": [9, 12, 15, 16], "concept": [9, 12, 15, 19], "learn": [9, 12, 15], "did": [9, 12, 13, 14, 15, 16], "help": [9, 12, 15, 16, 18, 19], "week": [9, 12, 15, 19], "zoom": [9, 12, 15, 19], "email": [9, 12, 15, 19], "slack": [9, 12, 15, 19], "link": [9, 12, 15, 19], "pm": [9, 12, 15, 19], "est": [9, 12, 15, 19], "tuesdai": [9, 12, 15, 19], "am": [9, 12, 15, 19], "thursdai": [9, 12, 15, 19], "highli": [9, 12, 15], "recommend": [9, 12, 15], "drop": [9, 12, 15], "clarifi": [9, 12, 15], "miss": [9, 12, 15], "don": [9, 10, 11, 12, 15, 16, 17], "show": [9, 12, 15], "come": [9, 12, 15], "content": [9, 10, 11, 12, 13, 14, 15, 16], "room": [9, 12, 15], "befor": [9, 12, 15, 19], "proceed": [9, 12, 15], "pleas": [9, 12, 15], "sure": [9, 12, 13, 14, 15, 16], "three": 9, "student": [9, 12, 15], "expect": [9, 12, 15], "ahead": [9, 12, 15], "intro": [9, 19], "record": [9, 10, 11, 12, 13, 14, 15], "30": [9, 19], "minut": [9, 12, 15, 19], "explain": 9, "inform": [9, 13, 14, 16], "about": [9, 13], "why": 9, "gener": [9, 13, 14, 17, 19], "environ": 9, "click": [9, 12, 13, 14, 15, 16], "here": [9, 12, 15, 17, 18], "check": [9, 12, 13, 14, 15, 16, 19], "passcod": [9, 12, 15], "m": 9, "few": 9, "pose": 9, "dure": [9, 10, 11, 13, 14, 19], "think": [9, 13, 14, 19], "answer": [9, 13, 14, 16, 19], "move": 9, "50": [9, 16, 18], "32": [9, 17], "degrees_f": 9, "degrees_c": 9, "probabl": [9, 14], "much": 9, "better": [9, 10, 11], "quickli": 9, "summar": [9, 13, 14], "happen": [9, 13, 14, 16], "between": [9, 18], "snippet": 9, "choos": 9, "huge": 9, "impact": 9, "readabl": 9, "futur": 9, "written": [9, 16], "later": [9, 16], "c": 9, "figur": [9, 12, 13, 14], "b": 9, "soluton": 9, "doubl": 9, "asterisk": 9, "rais": [9, 18], "power": 9, "four": 9, "repres": 9, "Then": [9, 16], "12": [9, 15, 17, 19], "24": [9, 17], "gave": 9, "short": 9, "lectur": 9, "share": 9, "polish": 9, "cover": [9, 10, 11], "embed": 9, "challeng": [9, 16], "throughout": [9, 18, 19], "youself": 9, "accompani": 9, "h_kyktfkfnw": 9, "spent": 9, "time": [9, 10, 11, 13, 14, 16, 18, 19], "group": [9, 19], "practic": [9, 19], "matrix": 9, "launch": 9, "colab": [9, 10, 11], "save": [9, 13, 14], "own": [9, 19], "copi": [9, 10, 11, 16], "shown": 9, "stuck": [9, 12, 15, 16], "eqslhr7_jba": 9, "everyon": 9, "least": [9, 12], "part": [9, 12], "dive": [10, 11], "neurosci": [10, 11, 19], "monkei": [10, 11, 13, 14], "perform": [10, 11, 13, 14, 17], "task": [10, 11, 13, 14], "repeat": [10, 11, 13, 14], "reach": [10, 11, 13, 14, 16], "movement": [10, 11, 13, 14, 16], "target": [10, 11, 13, 14, 16], "neuron": [10, 11, 13, 14, 16], "motor": [10, 11, 13, 14], "cortex": [10, 11, 13, 14], "trial": [10, 11, 13, 14, 16, 18], "cell": [10, 11, 13, 14, 16], "load": [10, 11, 13, 14, 16], "milisecond": [10, 11], "long": [10, 11, 13, 14], "disclaim": [10, 11], "simul": [10, 11, 13, 14], "purpos": [10, 11], "request": [10, 11, 13, 14, 16], "io": [10, 11, 13, 14, 16], "osf": [10, 11, 13, 14, 16], "xr9kc": [10, 11], "download": [10, 11, 13, 14, 16], "bytesio": [10, 11, 13, 14, 16], "dt": [10, 11, 13, 14, 16], "001": [10, 11, 13, 14, 16], "ms": [10, 11, 13, 14, 16], "mani": [10, 11, 16, 19], "contain": [10, 11, 13, 14, 16], "averag": [10, 11, 13, 14, 16], "singl": [10, 13, 14], "know": [10, 11, 19], "convert": [10, 11, 13, 14], "unit": [10, 11], "store": [10, 11, 16], "psth": [10, 11], "peri": [10, 11], "stimulu": [10, 11], "histogram": [10, 11, 13, 14, 17], "give": [10, 11], "estim": [10, 11], "fire": [10, 11, 13, 14, 16], "rate": [10, 11, 13, 14, 16], "plot": [10, 11, 13, 14, 16, 19], "soon": [10, 11], "subplot": [10, 11, 14], "ipykernel_2054": 10, "3821120907": 10, "automat": [10, 11], "file": [10, 11, 17], "dog": [10, 11], "jpg": [10, 11], "directli": [10, 11], "img": [10, 11], "googl": [10, 11, 13, 14], "jupyt": [10, 11], "local": [10, 11], "exist": [10, 11], "isn": [10, 11], "imread": [10, 11], "format": [10, 11, 13, 14], "35azg": [10, 11], "write": [10, 11, 16, 19], "third": [10, 11], "new": [10, 11], "version": [10, 11], "edg": [10, 11], "origin": [10, 11, 13, 14], "new_img": [10, 11], "axesimag": [10, 11], "0x7f9054163710": 10, "top": [10, 11], "bottom": [10, 11], "0x7f9040195b90": 10, "3rd": [10, 11], "0x7f9040117b10": 10, "1500": [11, 13, 14, 16], "150": 11, "04786133333333333": 11, "016": [11, 14, 16], "032": [11, 14], "024": 11, "04": [11, 14, 17], "200": [11, 18], "133": 11, "132": 11, "134": 11, "131": 11, "130": 11, "0x7fac06bd7490": 11, "0x7fac06b0c8d0": 11, "0x7fac06a8f950": 11, "bootcamp": [12, 15, 19], "05": [12, 19], "condit": [12, 19], "logic": 12, "23": 12, "review": [12, 19], "spike": 12, "00": [12, 15], "end": [12, 15, 19], "secret": [12, 13, 14], "mysteri": 12, "hint": [13, 14, 16], "recal": [13, 14], "previou": [13, 14, 19], "wa": [13, 14], "mimick": [13, 14], "situat": [13, 14], "again": [13, 14], "1000": [13, 14, 16], "onset": [13, 14, 16], "750th": [13, 14, 16], "chang": [13, 14, 16, 18], "angl": [13, 14, 16], "them": [13, 14, 16, 19], "trial_angl": [13, 14, 16], "m5tj3": [13, 14, 16], "af84k": [13, 14, 16], "aka": [13, 14], "uniqu": [13, 14, 16], "search": [13, 14], "boolean": [13, 14], "index": [13, 14, 16, 19], "degre": [13, 14], "spikes_for_angle_0": [13, 14], "q2": [13, 14, 16], "spikes_for_angle_0_tri": [13, 14], "correct": [13, 14], "e": [13, 14], "avearg": [13, 14], "leav": [13, 14], "q4": 13, "add": [13, 14, 16], "activ": [13, 14], "around": [13, 14], "neural": [13, 14, 16, 19], "consid": [13, 14], "period": [13, 14], "immedi": [13, 14], "500": [13, 14, 16], "across": [13, 14], "135": [13, 14, 16], "given": [13, 14, 16], "q8": [13, 14], "correl": [13, 14], "vari": [13, 14], "direct": [13, 14], "wai": [13, 14], "3sd2p": [13, 14], "imagin": 13, "featur": 13, "For": [13, 15, 17, 18], "human": 13, "chocol": 13, "eaten": 13, "monthli": 13, "measur": 13, "happi": 13, "nimagin": 13, "nthe": 13, "nfor": 13, "namount": 13, "ncontain": 13, "n": [13, 16], "imag": [13, 14], "2saj7": [13, 14], "45": [14, 16, 19], "90": [14, 16], "180": [14, 16], "225": [14, 16], "270": [14, 16], "315": [14, 16], "008": 14, "reach_angl": [14, 16], "92": [14, 16, 17], "256": [14, 16], "142": 14, "0x7fdf3ffeaa90": 14, "0x7fdf44a9ba90": 14, "drawn": 14, "uniform": 14, "distribut": 14, "bewteen": 14, "onc": 16, "99": 16, "ebatti": 16, "github": 16, "codingbootcamp": 16, "ifstat": 16, "html": [16, 17], "comparison": 16, "comparisonandlogicaloper": 16, "nwe": 16, "na": 16, "nhttp": 16, "forloop": 16, "done": 16, "without": 16, "run": 16, "appear": 16, "counter": 16, "nfirst": 16, "nha": 16, "nif": 16, "respons": 16, "implement": 16, "got": 16, "unique_reach_angl": 16, "dtype": 16, "int32": 16, "walk": 16, "mode": 16, "prior": [16, 19], "experi": 16, "As": 16, "iter": 16, "finish": 16, "past": 16, "q1": 16, "updat": 16, "within": 16, "ith": 16, "1d": 16, "mai": [16, 19], "somewher": 16, "overwritten": 16, "zero": 16, "firing_rate_per_angl": 16, "turn": 16, "q3": 16, "unique_reaching_angl": 16, "sinc": 16, "56": [16, 17, 18], "95": 16, "728": 16, "192": 16, "nrememb": 16, "ncould": 16, "nby": 16, "ny": 16, "vs": 16, "forget": 16, "prpjwinflmg": 17, "reusabl": 17, "piec": 17, "alreadi": 17, "seen": 17, "summed_valu": 17, "document": 17, "org": 17, "doc": 17, "stabl": 17, "switch": 17, "pass": [17, 18], "method": 17, "mix": 17, "vice": 17, "versa": 17, "ipykernel_2210": 17, "2054084026": 17, "syntaxerror": 17, "overrid": 17, "unless": 17, "08": 17, "36": 17, "44": 17, "48": 17, "52": 17, "64": 17, "68": 17, "72": 17, "76": 17, "84": 17, "88": 17, "96": 17, "bin_edg": 17, "dkv78n0chog": 18, "n_trial": 18, "assign": 18, "keep": [18, 19], "track": 18, "n_head": 18, "is_it_head": 18, "choic": 18, "proportion_head": 18, "f": 18, "came": 18, "head": 18, "string": 18, "my_vari": 18, "str": 18, "int": 18, "letter": 18, "special": 18, "charact": 18, "lowercas": 18, "underscor": 18, "necessari": 18, "mixedcas": 18, "Be": 18, "concis": 18, "avoid": 18, "reserv": 18, "keyword": 18, "list": [18, 19], "class": 18, "none": 18, "continu": 18, "global": 18, "def": 18, "del": 18, "assert": 18, "async": 18, "except": 18, "lambda": 18, "await": 18, "final": 18, "nonloc": 18, "yield": 18, "break": 18, "obei": 18, "style": 18, "veri": 18, "rnasequ": 18, "rna": 18, "sequenc": 18, "mouse_spe": 18, "perfect": 18, "temperatur": 18, "speed": 18, "fr": 18, "frame_r": 18, "welcom": 19, "site": 19, "quantit": 19, "skill": 19, "becom": 19, "increasingli": 19, "indispens": 19, "tool": 19, "modern": 19, "research": 19, "boot": 19, "camp": 19, "aim": 19, "empow": 19, "surf": 19, "endeavour": 19, "equip": 19, "basic": 19, "focus": 19, "principl": 19, "packag": 19, "neuroscientist": 19, "complet": 19, "exercis": 19, "involv": 19, "analys": 19, "incorpor": 19, "By": 19, "loop": 19, "summari": 19, "resourc": 19, "confid": 19, "knowledg": 19, "place": 19, "five": 19, "hour": 19, "session": 19, "prerecord": 19, "submit": 19, "comprehens": 19, "interact": 19, "introduc": 19, "togeth": 19, "program": 19, "often": 19, "applic": 19, "instructor": 19, "ta": 19, "receiv": 19, "feedback": 19, "remain": 19, "sever": 19, "offic": 19, "host": 19, "katrina": 19, "ella": 19, "destine": 19, "weekli": 19, "attend": 19, "possibl": 19, "case": 19, "zone": 19, "conflict": 19, "topic": 19, "highlight": 19, "compet": 19, "date": 19, "main": 19, "analysi": 19, "flow": 19, "statement": 19, "algorithm": 19, "19": 19, "wrap": 19, "26": 19, "studi": 19}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"arrai": [0, 5, 6, 9, 13, 14], "comput": [0, 9], "set": 0, "up": 0, "our": 0, "data": [0, 10, 11, 13, 14, 15, 18], "investig": 0, "axi": 0, "specif": 0, "vector": 0, "boolean": [1, 12], "index": [1, 5, 9, 12], "comparison": 2, "logic": 2, "oper": [2, 7, 9], "numpi": 2, "For": [3, 16], "loop": [3, 15, 16], "video": [3, 4], "If": 4, "statement": [4, 15, 16], "slide": 4, "note": 4, "1d": 5, "intro": 6, "what": [6, 17, 18], "ar": 6, "librari": 6, "math": 7, "type": [7, 8, 18], "order": 7, "plot": [8, 12], "style": 8, "1": [8, 9, 10, 11, 12, 13, 14, 15, 16], "function": [8, 17], "program": 8, "aka": 8, "matlab": 8, "2": [8, 9, 12, 13, 14, 15, 16], "object": [8, 19], "orient": 8, "interfac": 8, "basic": 8, "chang": 8, "line": 8, "properti": 8, "add": 8, "legend": 8, "figur": 8, "size": 8, "save": 8, "other": [8, 18], "imag": [8, 9, 10, 11], "histogram": 8, "bar": 8, "error": 8, "subplot": 8, "standard": 8, "gridspec": 8, "seaborn": 8, "session": [9, 10, 11, 12, 13, 14, 15, 16], "asynchron": [9, 12, 15], "version": [9, 12, 15], "section": [9, 12, 15, 16], "welcom": 9, "bootcamp": 9, "code": 9, "review": 9, "variabl": [9, 18], "3": [9, 15, 16], "exercis": [9, 10, 11, 12, 13, 14, 15, 16], "work": [9, 10, 11, 13, 14, 16], "spike": [9, 10, 11, 13, 14, 16], "4": [9, 16], "manipul": [9, 10, 11], "your": [10, 11, 13, 14, 16], "name": [10, 11, 13, 14, 16, 18], "here": [10, 11, 13, 14, 16], "solut": [11, 14], "recap": 12, "part": [13, 14, 16], "mysteri": [13, 14], "option": 13, "focu": 15, "us": [15, 17, 18], "analysi": 15, "practic": 16, "problem": 16, "multipl": 17, "input": 17, "keyword": 17, "vs": 17, "posit": 17, "argument": 17, "default": 17, "valu": 17, "output": 17, "why": 18, "do": 18, "we": 18, "introduct": 19, "cours": 19, "descript": 19, "learn": 19, "prerequisit": 19, "structur": 19, "expect": 19, "student": 19, "schedul": 19}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})