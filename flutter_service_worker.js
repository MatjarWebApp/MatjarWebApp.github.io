'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "49f1e73c47f14ba63d683df10e38dc5b",
".git/config": "4b62702fb6177fbca8ef288742072eb5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "41c6d4af4b1243421b1a949739e4c1a4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7b102e3ebab7b030a91cc741e39a9ae3",
".git/logs/refs/heads/master": "7b102e3ebab7b030a91cc741e39a9ae3",
".git/logs/refs/remotes/origin/master": "30ee6144c214f8a1fd3a9f4084505ecf",
".git/objects/00/21aa2f5b7f261fa6e56c7adf64a6baf1918956": "e6574699a8d66f384b3664d3bd2dac5b",
".git/objects/01/fc8c64d38c35c32b305166c85daabd04e1fa97": "035d7b63218dfea2e20ea0e3d707f87b",
".git/objects/03/2ecf5ac9ead51fe1d94e8d68a7d2d9a84afa6f": "226cac18e8e26ca2d2a53bd04f60f985",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/45e9e5a8dce096a76515eed6644c56a46dc6b1": "36c75634da7f2c079b54584743b1bcb7",
".git/objects/08/5b00baed7bdaef45d381b068c7ef22f0140fd1": "5699d1e487d3a3b05a37444e10ac73bc",
".git/objects/08/9dcbb6ce3f18b28bf6873a13d03762fcf1e395": "731fd537764a40da34f46339ccc6199f",
".git/objects/0b/8567b62d56ae0303f82a9c7adac82b7f99bfa6": "91e72e8fff9820c49f77df202a454e9d",
".git/objects/13/22d362d917d2eb0e686faa21d20d2d157ca0f2": "2af7b3a5171b4785ee6c2430fc12430a",
".git/objects/14/9fddee4834d024a2144e4a645376e995d5fe35": "b02dc073a449660024213bedc79ac66f",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/e80ac455e2c032e759a41454bb537631557d47": "66cec05325770350b1fdabf1a1de16f0",
".git/objects/1a/3128f798129696222812e692d6518e511485a8": "35fde02e887745e3c349508e580970d8",
".git/objects/1a/69ddc55a53ee09d9d1963481ca68943aaf7b21": "09efc2d73cb61a2115619612bae4b7cf",
".git/objects/1c/cd7fd3fab50221efc7390431dcc5fac7388887": "42ba5503ad8776df715c3ac1f3c11f8e",
".git/objects/1d/6a02f46250dfb2ed75d3131e1a31f4d03fc567": "46c196e2afa903d48fec7eb0f04f7d7d",
".git/objects/1f/28c2cd266cbac14236630ddae6dc2b987ca230": "9d77e12de34c4a8f1781f9cb4a435d6b",
".git/objects/1f/8d212e09e9673f9a67e64819018fda8e2d3c10": "e51935e7f866d8cb28126df7cfd40b7b",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/56af8851a683f4d74205ccf1eee736deb3430d": "9392149b57e04f68b65b7def2338a989",
".git/objects/21/a6bd84e4875c5739909e5aa2928b0478a98344": "6afd9c731bea0293db7e23d2346a7011",
".git/objects/25/d6cc192747b8b2bd57a2390efbbb3b04c72e1f": "d69b0bb036f59430b776c03d2b77b13a",
".git/objects/28/8a29b3720820fadc836bac0437cfb035911748": "f48271aa017bfa4fe9dcd319a325e5f5",
".git/objects/2b/4b313ce56d2bd759a0888e65c6979246969193": "f334335c9cba1bad4fac95662f295e38",
".git/objects/2e/1f585b7108e6e973b32787809e4c220cbeade2": "34f8b94255000a4d9de2f815e1f5b4ed",
".git/objects/2f/3cf70ab8a70ea1ad124c711879f30ef91d275b": "3fa14ae5c04386496936793275558bac",
".git/objects/30/018acdb197f9e344a1e15018b7e01385f6948d": "977e34212d2c5d24e11a3a87759d1838",
".git/objects/35/917deeaabb1832567a3cb7314712c21a7d1595": "8cc8f640c4656f22a92bb497aedc89db",
".git/objects/3a/92854c41d24e9cd18603ba0e0c7c783eb7bf5b": "c225819b70521099de5333e193b202a1",
".git/objects/3c/1682fb42e2979415668ce068ff8021b978ffee": "6dc8f272ce6012cab08da6759ef06ef8",
".git/objects/3c/3fde048f1f8ed1b8642e011dcb1afe7cd8c0d0": "4888e46c8b698590a98ac81111ce15e9",
".git/objects/3d/c26fd9011c25f1731d3284d4aaf478fcdf8824": "a6aa0b4f884df0db6238cda8d585b929",
".git/objects/43/4f934eed7bad325505527943e519bf4f72a1f4": "faf27e0aeca8810677f162f4e3119d84",
".git/objects/45/f97ad818eb395dffe432631e968f6455e056a9": "e7630dedb7080f4652a0cf885a5788a9",
".git/objects/47/710d4588eae9e7b6fc80ade98cb2d97c4eca36": "1229bc24c98f6cd9596e879863f41f5a",
".git/objects/47/c57e1f3f1ac4a257440a407c6b134b3a323937": "88d570942303214b3817cd823ff7cbb4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/e81e5f26f095f6909345681e9fbae331902971": "ebb381a005a003d3aaf9e970676411da",
".git/objects/4b/9fc259e2a3fd6474d35877a470aa195b37cd4b": "5b9513e1fa490ac0e1689d2d15d0b771",
".git/objects/4d/8d7cd59d6dc5f8c6583cd6a6db66f5966b4a07": "18772e7b15cc66334a507d7cff9a1ff4",
".git/objects/4d/ea6b9659d36a6baa812f9d968e0b7954d568e6": "f37d142644b702e0a68c2bb4fcf1940c",
".git/objects/4e/c506961d701c2095c9d46e7f90e4df528b8fb9": "f260cb26801145340d6954a9b1bf91a8",
".git/objects/4f/c3f112de0831b5d34a2461b9a8c4c607606c84": "3e29ebcf08cea7b0fa3176e1db2ae850",
".git/objects/50/ed5ffa2611234dc26e1e9bf571b36e6c781c52": "8c4c933f9f913a3fdc3b561560218576",
".git/objects/51/bbf186576ef139231d952dc1cd9ead0e751d20": "c9367962aa2860015a9e70ad6533a45c",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/56/202dfb59acff86de0ca1fc72ca67cff860688d": "ae722241a2c3e285a7bd903a7f0da188",
".git/objects/5a/58780cde36193f5909dc44ed8d67501afe9382": "9e7774760801b398c14ba8725d751431",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5a/c6db5944b43972cd8fb53cc7a4141d15f88f92": "d1215eec3a5b2ec698f2022ec78bca87",
".git/objects/5a/fbdea0fa100953f1212067c967790fca072582": "57390a94a4b2006db89ae55bf46d1ee3",
".git/objects/5f/2e202909b834988db2576689e3161f57b82c65": "b85bba55dbeafac2744365c27cdf070b",
".git/objects/65/af299354feaad340a9a8903ee48ce629ac55d3": "15ab3b9a07f5f29d2c92c13193d01c6d",
".git/objects/69/4145e016fa5f1e87fcf5b3dcd870662100dc64": "e6ab6a0a12192236258f7af2d7648b62",
".git/objects/6b/c72950961299fe814bd41f343ce2f859a8cc95": "b5bde2dbc484c58cba335c45ae96e8a9",
".git/objects/6e/4c92d73cfcffb801b528a3400b2dfea5a76202": "06dd5c966b401ac7002f3d1d7aec01b8",
".git/objects/6f/066b8ce3cb3978762c2d5d154dd3c00d3ec928": "8be7fef15dcc63b73183fc216bc3f0c7",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/73/483472dd85f968e63d8db9d02cde436a59f498": "fdc5bb0651fff0f9114302e1f52e3acc",
".git/objects/76/6cb439237ce23d0009633147e84d4c303cbf08": "29b27b2d59cb108fcab59c6d7fff5274",
".git/objects/7b/020e819aeba996bd88b608282acc5fefcd295b": "fa756fb8d7023443785c59762419f2fe",
".git/objects/7b/4f28bafe401f046003195de2422bd5c18955fd": "2afc7bf4780a3d5253a824bce50b1bf0",
".git/objects/7c/1e049aaaef78e3bd91b89eae4a2dcd9d11aca7": "7434edd6ec5f3574f6e5f027fe36473b",
".git/objects/7c/3211c4ec0f2e1712b62467acb342d455872d2b": "20efd66e18ce9dea48df02ddd1ffdc51",
".git/objects/7c/743e4fabc5353466f3b963548cc0111c8b0b34": "91896e787be7f010a36b8fe9b44fc7e8",
".git/objects/7e/c7b44f4f546fe399f3a606c62cd0b8ac8db097": "3318914e625940a50f1b5e04ea0c47e6",
".git/objects/80/7bdd4ff44d00e4e85769f83765bd7d1dad0eac": "1a9dce7624109661aa90970360c999a5",
".git/objects/81/87281b43a77a841bcd21ac10dc39e02f53cb41": "a64f7b2de0b551d4ba4ae6ca5488343c",
".git/objects/82/3b4e4408f7630d18a32a9d69d0e67950907773": "2c5a6db824df64057aab70d23d0f478b",
".git/objects/84/5d8502af4f4493f61f1a6f84e8aabf7fea8f8c": "a16e205c57bfea4bfb8adfc60ec6103a",
".git/objects/88/860d50f8d680a6bac76aab5edd9cbc37bc7b1b": "6b72630e2e0bfa8c6ea0ef1df46daaf8",
".git/objects/89/271f89a81bda7836864dbecd206d9a50098ba8": "1b1502f19fbb79aa364061b885c3f197",
".git/objects/8c/bff7aaffa0713741af51380548fc380d4a8fa4": "80f09392a4f4ec8674db24f52eb3fb29",
".git/objects/8d/18e5cc8b55983e0e604c9e348587ae3e65da15": "629fe2cf7e153aec0d5a18b767e767bb",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/96/830269345dd19d6ffb49c550fbe5cfc1c39188": "746fc89f6f464d85fbc39c16ec0f8bf5",
".git/objects/97/719c608128ab9a438516c521615d7b666a431d": "5e9424757c20b476bfbb7f25b4691791",
".git/objects/99/9871052bd6f2724b129ff3adc958b78d90edfd": "de023559edb5c4256d1c55ad352d85af",
".git/objects/99/c34c6c6abeb79a5802b49de5471c47f0fdf329": "0d0f19b5d439916d05755c2f3cad5471",
".git/objects/9b/e70128030b6342e1668e6cef383d335292a65c": "f7663247047a57f40820aeb7fedd2cd3",
".git/objects/a0/fdb312604eefd85ee4c419b86d1c30ac779eec": "efbfafd16d341bff74c184f6e4347019",
".git/objects/a5/6d9c8395a5d3d85982a7bba800548969155ce1": "c32bbf4dfba3d3ee6eeb3c6c8d6d2fc0",
".git/objects/a7/4886c7f4fd3101f9adfa2adccfdd56c867adc5": "216e6c2c3463ae90b8ed5133638c66b9",
".git/objects/a7/d7e229d8fcc8d27bb96c946c218848f58c5d1c": "85a4bc5f23162ac2effe6ba92a88809d",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b4/ef280f4fe524a67b0e4f9f45092dde616a87a6": "c076ea3c967794bc2346dabf91ec9515",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/a6e74ed07343191afe615bb867cacfd0de4597": "6fa5dadef5c44546ce5ce4fd9763b59f",
".git/objects/b6/3833009c08192808bcfc3d93a567e60b243ac5": "b27c03aecf3a6f1acad13b85d8a75b1b",
".git/objects/bd/2bf7b55b56484031660cf410af3cbf8b47d303": "56bbf333bde97fb80aad66e4e1e47776",
".git/objects/c0/53b3441caa168f6c331a79c43e5e9445e9c922": "7e9e0656bc9782869c63d8f8bc60429d",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c9/d8c167ad91484f8c1c42b1ba42392810025f34": "8f3fe508e6cedcad36e0db95fc361a6d",
".git/objects/cf/f8f9314f8ef932d0351fb2a6822eed13a6b0a2": "0d2d197ee5acfcbaf7416f2683e7e706",
".git/objects/d2/82832d9cd37ac9261f348e2d7f4d7f47df3840": "0c5eb19eb488450f732175b075be8b7b",
".git/objects/d3/0960bb1eee36400910c86ab515122ce7c8c86e": "8a5c2cbf0ac576a8b14d14d3f3711dca",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/3eba2285549db0e796dea2b0182f0faef4fb99": "ef44c959abac4b380a8677dfecc166cd",
".git/objects/dc/e87172658aad1ba40defa527cf8d642d511055": "f59b43744b238dc721d7f921b9b12268",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/102bcf38da4d279fabeb0943b85381420e010f": "201101d06d94433c05e71889731477c4",
".git/objects/e0/87fa2b7ff169c593942ec930e4338c4919fe28": "de51b534617df385d796d7b4e9eed8d6",
".git/objects/e0/edf6cc1bb28596a6d819d9ef171f8d4ecaddea": "1461f5479bded8c4b7c0a07890d7f5ba",
".git/objects/e1/35670b27b0a67c1ac924b30e6b0f283c6c5c82": "e54e234b3c68a8338afd6db126e2d37b",
".git/objects/e3/fdcd9128ace45e7a570c6a9e8426cf05522974": "0b471bc978aae025e9396a6aef6fb574",
".git/objects/e6/606ca5ff958e4e27a7a690fcba0059d86b05d0": "f146edf9a9bc79a02047fa6bab42bd20",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ea/539d67fa3cadbeed99fb1192b60a98c0a645f6": "81241c66f653f683d5ac61b1be90d29e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/0b7bf17bd52d9c22c427c2d24c97323c44b0e7": "42a837d44820ccfce8526109ab381baa",
".git/objects/f4/1d57d20255a1b3c85ce699f09a820e78081ee5": "60de286be39a8943c7ab4deb330996dc",
".git/objects/f5/2d5152225af9cc958aa57040d60d9bba9b3688": "588e1dca29aea4691ce181ea5e757652",
".git/objects/f6/e905f74af8c518db3a3a3e1e9b19b95b41a87d": "24c8e5c9c655b0b14bb0b44ef355fb92",
".git/objects/f7/848200826eb1c5401d47bf09eef40572d80b13": "59c4c31241ecbdf6d68de2f6753ab6ad",
".git/objects/fa/a9748f8a8359daa80f3d09e4c4d67dd95bb040": "1be25bbc49637e9f5cc06ef15ee8519a",
".git/objects/fa/b04ff4f57e78d5eb4003289bcbe2508412895b": "a25ffdde4805583cdd9e97403ba76f2b",
".git/objects/fc/7611e00e324e0b1ff5351d5e1ed4265e3c65a8": "d24ec034365bf939c33e894d9ae0f4ec",
".git/objects/fd/126193f653b7d2dc82c80935585350716f8035": "041beefbaf4cf23295edca631e846ad9",
".git/objects/fd/8906bdbc75e043948a1f8609d0b1f2a2b1c7be": "a946aa86ffc09263ab209bc47df2dc8b",
".git/objects/fd/dda0489286dddd7a0c05d0fad27715cad16272": "5d2828b55a666ccef19f16362427253b",
".git/objects/fe/bd986c884d03b8eff4ea09aca0a6e92399fdd6": "64206d6d0c3d3cbe121178dfb43d80db",
".git/objects/fe/cff2d8c74613af19b4b6f598b40ddaa28df95c": "89a3238024121dabf46bcb6960882de6",
".git/refs/heads/master": "82c175a654be8a0908cdcabb4135c11f",
".git/refs/remotes/origin/master": "82c175a654be8a0908cdcabb4135c11f",
"assets/AssetManifest.bin": "3c62b0729e251ad7ee7363c2d710ed1f",
"assets/AssetManifest.bin.json": "d591b06ff19ed0e3584b7a20c2f89525",
"assets/AssetManifest.json": "8bd67402cd6fbb1c0e0eff42318fd4ed",
"assets/assets/fonts/Gilroy-Black.otf": "5440ca6b6b6fe6b2ca5d0e88412c0843",
"assets/assets/fonts/Gilroy-Bold.otf": "f18b0b6645c0a1e1dc2c326de626a7cd",
"assets/assets/fonts/Gilroy-Medium.otf": "5c1e574883aeccf0f98afb84482f3839",
"assets/assets/fonts/Gilroy-Regular.otf": "93a118ae3780dd9c4acc80c606b3c1b5",
"assets/assets/fonts/Gilroy-Semibold.otf": "ac29a758c5d2d12b4ccabde8d975bec6",
"assets/assets/fonts/matjar/fonts/Matjar.ttf": "dd7e8e9c3bbd2539049fad96551d0eec",
"assets/assets/icons/Add-more.svg": "e349df9c78ecda5f01c610bfbeb771b6",
"assets/assets/icons/arrow-left.svg": "d878daf9ab717a2ba3dd4538539532c9",
"assets/assets/icons/back.svg": "dc173e515810b22bc721df00f07cce2f",
"assets/assets/icons/box-seam.svg": "faa2069e84447c985b2dfc30a7c74639",
"assets/assets/icons/Calculate.svg": "bbb1fcacb9badfd4dcb71caefcd327e6",
"assets/assets/icons/Calender.svg": "df3725ea3af8e709ad236d0f0cbc4da1",
"assets/assets/icons/check.svg": "8a2c9089cc38c9a84e41ee8c8aa62f07",
"assets/assets/icons/checklist.svg": "5b91102a337dccc5131a8a37708dca83",
"assets/assets/icons/circle-check.svg": "d4f1127c31937b485aeb5e0f82d5f00d",
"assets/assets/icons/Client.svg": "9d6a80b4ddcc4b777e4ac924c69c3959",
"assets/assets/icons/coins.svg": "de2c7a72c1e96955fdb382310c03206d",
"assets/assets/icons/comptoire.svg": "24331f5a41c49d4953e3a0dbb6e07ae1",
"assets/assets/icons/Down.svg": "e5aeee109e728855c8a221668f7fa2c9",
"assets/assets/icons/Download.svg": "0e624653a42c610e7018f83b6115472f",
"assets/assets/icons/drop.svg": "5fd6832f02bb74098c77aaacc5173d31",
"assets/assets/icons/Edit.svg": "fa2426dd1667c85d8546d02249cb12be",
"assets/assets/icons/Gift.svg": "093456dcf47babda35769b3f286acd0f",
"assets/assets/icons/Group.svg": "769fa55a1870ee813b9e1cb6536ae196",
"assets/assets/icons/Help.svg": "1017cabf6a89e92c371d5ec6aef895f0",
"assets/assets/icons/Info.svg": "f487578e19dcc2531986efb0ef17051f",
"assets/assets/icons/Invoice.svg": "5fe0490b00af46d5aa4799f6dae8112e",
"assets/assets/icons/List.svg": "5213d5c88c347ad6253902f3fc816808",
"assets/assets/icons/mail.svg": "38b8c5b08e27ba1f512e7eb9c7f7c671",
"assets/assets/icons/Mailto.svg": "61aa3ab146f8a42ecaab7d0b0c07b2b4",
"assets/assets/icons/map-pin-down.svg": "91a88303add7ec3908c8bd81d8b14147",
"assets/assets/icons/map-pins.svg": "e31cc6edc6a48a0a00478404d4b3a0ba",
"assets/assets/icons/matjar.svg": "e8145fc523e72a62b5f621eaec465cbf",
"assets/assets/icons/matjar2.svg": "29879deafe6ab5dbeddd3875adbb26fb",
"assets/assets/icons/more.svg": "5d598d8f1116b422e81c0c33780cf0ef",
"assets/assets/icons/news.svg": "59bff2fe10359b0131e11fe999778350",
"assets/assets/icons/package.svg": "22a35d8d438d9383a6f94ef57a569157",
"assets/assets/icons/packages.svg": "85cc6a5ebc7b5409905df4475f58750c",
"assets/assets/icons/plus.svg": "5391aadc9c86e8ceaee30de0e9d790ad",
"assets/assets/icons/Print.svg": "cf4435c67556e08d5fa4edf45daea910",
"assets/assets/icons/printer.svg": "60eaae8017c7fbc238ac8db38aeee688",
"assets/assets/icons/Product.svg": "e47b30461a66c9766f86e2f299b1a267",
"assets/assets/icons/ruler-2.svg": "d13e4728d35f774f3fc4f2851fec69ea",
"assets/assets/icons/Scan.svg": "e6a8d5737632acc4c5d25ba1f9ac9f31",
"assets/assets/icons/scan_matjar.svg": "573869ad02fc404d68888c4d6ed36124",
"assets/assets/icons/script-plus.svg": "969a070ee3d1f5fd37f53c6d26f07729",
"assets/assets/icons/search.svg": "c51d063283317bc7525c1ea30bc41102",
"assets/assets/icons/Sell.svg": "6a592c1c1aab868957775ccb51215689",
"assets/assets/icons/Setting.svg": "0934950bdb08ca436534471c273b84de",
"assets/assets/icons/Stat.svg": "c64670e25463dfa2e89f7900a02d21c0",
"assets/assets/icons/Ticket.svg": "d9ebdf6ebb515b8cd6c62f8f8f13e9b7",
"assets/assets/icons/Transaction.svg": "c1472218e3e0752ac927984d3d9217f8",
"assets/assets/icons/Truck.svg": "0b1dc3f1ec8ea04554f2b50386a2efbc",
"assets/assets/icons/truck2.svg": "eccd9078d532659e216d3b0734f2994b",
"assets/assets/icons/turn%2520Back.svg": "e02968c0c0450466a376c418040c9776",
"assets/assets/icons/upload.svg": "cc897fecde2c424e3cfd8af6bb584e8c",
"assets/assets/images/icon.png": "58286ba0657bc3787bce703c66c69ff6",
"assets/assets/images/p1.png": "ececa532e63112984e048aa9a877b43d",
"assets/assets/images/p2.png": "c54f5187851f03af01d3d1031ddf2fd7",
"assets/assets/images/p3.png": "65238c289c1eeb8f9bfb71c1eaa135b3",
"assets/assets/images/p4.png": "712534389e9ab19385652363855f7a26",
"assets/assets/images/p5.png": "ad8029044530deaa38eac84d64f001fd",
"assets/assets/images/p6.png": "ececa532e63112984e048aa9a877b43d",
"assets/assets/images/store.png": "0f346dd8fdced89d0de47041c95ca0f3",
"assets/assets/svg/Calque_1.svg": "301db8ebf4468a7d79c51955cdb226f8",
"assets/assets/svg/Comptoir.svg": "5343293f48ab8d31e851a364b831555d",
"assets/assets/svg/dial_logo.svg": "71ca33786c0e375c0a412222262d92c7",
"assets/assets/svg/empty_client.svg": "8a8d50fcbb1af2652d6a19c63309f57a",
"assets/assets/svg/empty_comptoir.svg": "1a074c847c9474e4e4cf03a184c65605",
"assets/assets/svg/empty_product.svg": "8a1cedbab1d1bf1347b2ac792c459dc0",
"assets/assets/svg/empty_suplier.svg": "c3b75570683e1d01d1c1bc4156909604",
"assets/assets/svg/Group%252073.svg": "1dc2d63cb2302d6bd1b82c493f05eeb5",
"assets/assets/svg/image_placeholder.svg": "8dff572d8899685e606fa1eb54c57d08",
"assets/assets/svg/image_upload.svg": "a9519950da4894274f178f559093e517",
"assets/assets/svg/logo.svg": "8fd8b9a3dc955f987aaed7a40af4d45b",
"assets/assets/svg/logo_placeholder.svg": "5bef9d61fccdaa9cdb06613cf2db19b7",
"assets/assets/svg/matjar_logo.svg": "41c6cc8822ece6059dcaeb999b72d0ff",
"assets/assets/svg/order.svg": "51c6bd217e04d8e7a67e3fb1fcc9c470",
"assets/assets/svg/Product.svg": "5cb49a566fbfb18056bb71ebe4f3034e",
"assets/assets/svg/splash_logo.svg": "d35b36c809a2b68e3f0423e9a2d6b3a2",
"assets/assets/svg/Truck.svg": "34a13d3b62afe65fdf1c9c768fc777f3",
"assets/FontManifest.json": "afa9272776624651fbd5e7d94b2de4b0",
"assets/fonts/MaterialIcons-Regular.otf": "abea7bbb3d75a3596ffa691dc46112a6",
"assets/NOTICES": "7d001fbd0f4b89959a3c943aa388a2a0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "990b3f0dac3efc5afbe0e5c7d7282a77",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "e0ddeb0d85fd15eb121127fabefb149a",
"icons/Icon-512.png": "5b92304a7013ffb08de164d251dafd3f",
"icons/Icon-maskable-192.png": "e0ddeb0d85fd15eb121127fabefb149a",
"icons/Icon-maskable-512.png": "5b92304a7013ffb08de164d251dafd3f",
"index.html": "8fac75dc8db2c1985f9da881b377caa2",
"/": "8fac75dc8db2c1985f9da881b377caa2",
"main.dart.js": "d8420ea09bd2f1371c8d4d9355efe288",
"manifest.json": "848d5457a925ddee89e78aec86e914dd",
"version.json": "2d059b725e44e0faf172d42105613d3b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
