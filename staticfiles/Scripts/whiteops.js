if (typeof TMWO != "object") {
	TMWO = {};
};

TMWO.whiteOpsExecuted = false;
TMWO.siteId = '0';

TMWO.whiteOpsIds = {
    /*"421921": true,
	"453554": true,
	"474164": true,
	"474174": true,
	"474184": true,
	"474204": true,
	"452454": true,
	"453544": true,
	"454824": true,
	"454914": true,
	"461734": true,
	"475044": true,
	"383151": true,
	"464804": true,
	"467984": true,*/
	"390061": true
};

TMWO.integralAdsExecuted = false;

TMWO.integralAdsIds = {
	/*"57705": true,
	"57831": true,
	"59853": true,
	"60001": true,
	"60047": true,
	"60152": true,
	"60394": true,
	"60686": true,
	"60820": true,
	"61344": true,
	"61345": true,
	"61348": true,
	"61349": true,
	"61350": true,
	"61470": true,
	"61917": true,
	"116861": true,
	"330731": true,
	"373341": true,
	"375031": true,
	"385331": true,
	"389921": true,
	"399231": true,
	"403411": true,
	"405501": true,
	"407001": true,
	"420141": true,
	"420351": true,
	"420361": true,
	"423641": true,
	"426021": true,
	"426041": true,
	"426041": true,
	"428081": true,
	"430061": true,
	"430071": true,
	"430822": true,
	"434132": true,
	"434152": true,
	"434622": true,
	"439874": true,
	"440474": true,
	"440624": true,
	"440634": true,
	"440644": true,
	"440654": true,
	"441584": true,
	"441594": true,
	"441604": true,
	"441614": true,
	"441624": true,
	"441634": true,
	"442024": true,
	"444964": true,
	"446804": true,
	"448054": true,
	"449634": true,
	"449644": true,
	"450714": true,
	"452484": true,
	"454254": true,
	"454864": true,
	"454874": true,
	"454884": true,
	"454894": true,
	"455024": true,
	"455084": true,
	"457924": true,
	"458764": true,
	"60394": true,
	"57831": true,
	"60686": true,
	"61349": true,
	"456824": true,
	"414851": true,
	"420411": true,
	"444964": true,
	"61844": true,
	"464804": true,*/
	"390061": true
}

TMWO.comScoreExecuted = false;

TMWO.comScoreIds = {
	"456824": true,
	"462664": true,
	"462684": true,
	"60686": true,
	"455754": true,
	"478014": true,
	"57831": true,
	"408121": true,
	"468164": true,
	"468174": true,
	"390061": true
}

function tmLoadExternalJS(url) {
	var e = document.createElement("script");
	e.src = url;
	e.type="text/javascript";
	document.getElementsByTagName("head")[0].appendChild(e);
}

function runWhiteOps(siteId){
	if (!TMWO.whiteOpsExecuted && TMWO.whiteOpsIds[siteId]){
		TMWO.siteId = siteId;
		TMWO.whiteOpsExecuted = true;
		
		var a = document.createElement("script");
		a.async = true;
		a.type = "text/javascript";
		a.src = "//s.update.tremorvideo.com/2/tm01/analytics.js?si=" + TMWO.siteId;
		document.body.appendChild(a);
		
		var b = new Image();
		b.style.display = 'none';
		b.src = "//post.update.tremorvideo.com/2/tm01/one.gif?si=" + TMWO.siteId;
		document.body.appendChild(b);
	};
	
	if (!TMWO.integralAdsExecuted && TMWO.integralAdsIds[siteId]){
		TMWO.integralAdsExecuted = true;
		
		tmLoadExternalJS('//pixel.adsafeprotected.com/jload?anId=6101&advId=1&campId=1&pubId=' + siteId + '&chanId=1&placementId=1');
	};
	
	if (!TMWO.comScoreExecuted && TMWO.comScoreIds[siteId]){
		TMWO.comScoreExecuted = true;
		
		var comScoreDiv = document.createElement("div");
		comScoreDiv.setAttribute("class", "mlabs_container");
		
		document.getElementsByTagName("body")[0].appendChild(comScoreDiv);
		
		var e = document.createElement("script");
		e.src = "http://tags.mdotlabs.com/tracking.php?siteID=DrCS&customUserValue=" + siteId;
		e.type="text/javascript";
	
		comScoreDiv.appendChild(e);
	};
};