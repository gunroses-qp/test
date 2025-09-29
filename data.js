// data.js
const quizData = [
  // === 填空题：1-50 ===
  {
    type: "fill",
    question: "《中华人民共和国宪法》第五十三条规定，中华人民共和国民______必须遵守宪法和法律，______，爱护公共财产，遵守劳动纪律，遵守公共秩序，尊重社会公德。",
    correct: ["公民", "保守国家秘密"]
  },
  {
    type: "fill",
    question: "《中华人民共和国保守国家秘密法》由中华人民共和国第14届全国人民代表大会常务委员会第八次会议于2024年2月27日修订通过，自______起施行。",
    correct: ["2024年5月1日"]
  },
  {
    type: "fill",
    question: "国家秘密是指关系国家的安全和利益，依照确定，在一定时间内______的人员知悉的事项。",
    correct: ["法定程序", "只限一定范围"]
  },
  {
    type: "fill",
    question: "保守国家坚持总体国家安全观，遵循党管保密、______、______、突出重点、技管并重、创新发展的原则，既确保国家秘密安全，又______。",
    correct: ["依法管理", "积极防范", "便利信息资源合理利用"]
  },
  {
    type: "fill",
    question: "国家对在保守、保护国家秘密以及______等方面成绩显著的单位或者个人给予奖励。",
    correct: ["改进保密技术、措施"]
  },
  {
    type: "fill",
    question: "机关、单位应当实行______，健全保密管理制度，完善保密防护措施，开展保密宣传教育，加强保密检查。",
    correct: ["保密工作责任制"]
  },
  {
    type: "fill",
    question: "机关、单位负责人对本机关、本单位的保密工作负______责任，工作人员对本岗位的保密工作负______责任。",
    correct: ["全面领导", "直接"]
  },
  {
    type: "fill",
    question: "国家秘密的密级分为______、______、______三级。",
    correct: ["绝密", "机密", "秘密"]
  },
  {
    type: "fill",
    question: "绝密级国家秘密是最重要的国家秘密，泄露会使国家安全和利益遭受______的损害。",
    correct: ["特别严重"]
  },
  {
    type: "fill",
    question: "机密级国家秘密是重要的国家秘密，泄露会使国家安全和利益遭受______的损害。",
    correct: ["严重"]
  },
  {
    type: "fill",
    question: "秘密级国家秘密是一般的国家秘密，泄露会使国家安全和利益遭受______的损害。",
    correct: ["较重"]
  },
  {
    type: "fill",
    question: "国家秘密及其密级的具体范围，由国家保密行政管理部门分别会同外交、公安、国家安全和其他中央有关机关规定。",
    correct: [] // 此题为陈述句，无填空
  },
  {
    type: "fill",
    question: "军事方面的国家秘密及其密级的具体范围，由______规定。",
    correct: ["中央军事委员会"]
  },
  {
    type: "fill",
    question: "国家秘密的密级、保密期限和知悉范围，应当根据情况变化______调整。",
    correct: ["及时"]
  },
  {
    type: "fill",
    question: "国家秘密的保密期限，除另有规定外，绝密级不超过______年，机密级不超过______年，秘密级不超过______年。",
    correct: ["三十", "二十", "十"]
  },
  {
    type: "fill",
    question: "国家秘密的知悉范围，应当限定在______必要范围，并根据需要限定到具体人员。",
    correct: ["最小"]
  },
  {
    type: "fill",
    question: "国家秘密的知悉范围以外的人员，因工作需要知悉国家秘密的，应当经过______批准。",
    correct: ["机关、单位负责人"]
  },
  {
    type: "fill",
    question: "国家秘密载体的制作、收发、传递、使用、______、保存、维修和销毁，应当符合国家保密规定。",
    correct: ["复制"]
  },
  {
    type: "fill",
    question: "属于国家秘密的设备、产品的研制、生产、运输、使用、保存、维修和销毁，应当符合国家保密规定。",
    correct: [] // 无填空
  },
  {
    type: "fill",
    question: "存储、处理国家秘密的计算机信息系统（以下简称涉密信息系统）按照______实行分级保护。",
    correct: ["涉密程度"]
  },
  {
    type: "fill",
    question: "涉密信息系统应当按照国家保密标准配备______设施、设备。",
    correct: ["保密"]
  },
  {
    type: "fill",
    question: "涉密信息系统应当按照规定，经______后，方可投入使用。",
    correct: ["检查合格"]
  },
  {
    type: "fill",
    question: "机关、单位应当加强对涉密信息系统的管理，任何组织和个人不得将涉密计算机、涉密存储设备接入互联网及其他公共信息网络。",
    correct: [] // 无填空
  },
  {
    type: "fill",
    question: "在未采取防护措施的情况下，在涉密信息系统与互联网及其他公共信息网络之间进行信息交换是______的。",
    correct: ["禁止"]
  },
  {
    type: "fill",
    question: "涉密计算机和移动存储介质未经技术处理，不得______使用。",
    correct: ["赠送、出售、丢弃"]
  },
  {
    type: "fill",
    question: "机关、单位应当加强对工作人员使用互联网的保密管理，严禁在互联网计算机上处理、存储国家秘密信息。",
    correct: [] // 无填空
  },
  {
    type: "fill",
    question: "举办会议或者其他活动涉及国家秘密的，主办单位应当采取保密措施，并对参加人员进行______，提出具体保密要求。",
    correct: ["保密教育"]
  },
  {
    type: "fill",
    question: "机关、单位公开发布信息，新闻、出版、影视、网络信息服务提供者登载、播发信息，应当遵守有关保密规定。",
    correct: [] // 无填空
  },
  {
    type: "fill",
    question: "机关、单位对外交往与合作中需要提供国家秘密事项，或者任用、聘用的境外人员因工作需要知悉国家秘密的，应当报______或者省、自治区、直辖市人民政府有关主管部门批准，并与对方签订保密协议。",
    correct: ["国务院有关主管部门"]
  },
  {
    type: "fill",
    question: "国家建立______制度，对从事涉密业务的企业事业单位进行保密审查。",
    correct: ["保密审查"]
  },
  {
    type: "fill",
    question: "从事涉密业务的企业事业单位应当具备保密法律法规规定的条件，在______以上保密行政管理部门指导监督下开展涉密业务。",
    correct: ["县级"]
  },
  {
    type: "fill",
    question: "涉密人员上岗应当经过保密教育培训，掌握保密知识技能，签订______，严格遵守保密规章制度。",
    correct: ["保密承诺书"]
  },
  {
    type: "fill",
    question: "涉密人员出境应当经有关部门批准，有关机关认为涉密人员出境对国家安全造成危害或者对国家利益造成重大损失的，______批准出境。",
    correct: ["不得"]
  },
  {
    type: "fill",
    question: "涉密人员离岗离职实行______管理。离岗离职前，应当清退所保管的国家秘密载体，并签订保密承诺书。",
    correct: ["脱密期"]
  },
  {
    type: "fill",
    question: "国家秘密载体的______、______、______、______、______、______、维修和销毁，应当符合国家保密规定。",
    correct: ["制作", "收发", "传递", "使用", "复制", "保存"]
  },
  {
    type: "fill",
    question: "国家秘密载体的传递应当通过______、______或者专人进行，不得通过普通邮政、快递等无保密措施的渠道传递。",
    correct: ["机要交通", "机要通信"]
  },
  {
    type: "fill",
    question: "国家秘密载体的复制，应当经本机关、本单位负责人批准，复制件应当加盖复制机关、单位戳记，并视同原件进行管理。",
    correct: [] // 无填空
  },
  {
    type: "fill",
    question: "存储、处理国家秘密的计算机信息系统按照涉密程度实行______保护。",
    correct: ["分级"]
  },
  {
    type: "fill",
    question: "涉密信息系统应当按照国家保密标准配备保密设施、设备，保密设施、设备应当与涉密信息系统______规划、______建设、______运行。",
    correct: ["同步", "同步", "同步"]
  },
  {
    type: "fill",
    question: "涉密信息系统应当按照规定，经检查合格后，方可______。",
    correct: ["投入使用"]
  },
  {
    type: "fill",
    question: "机关、单位应当加强对涉密信息系统的管理，不得将涉密计算机、涉密存储设备接入______及其他公共信息网络。",
    correct: ["互联网"]
  },
  {
    type: "fill",
    question: "在未采取防护措施的情况下，不得在涉密信息系统与互联网及其他公共信息网络之间进行______。",
    correct: ["信息交换"]
  },
  {
    type: "fill",
    question: "涉密计算机和移动存储介质未经技术处理，不得赠送、出售、______。",
    correct: ["丢弃"]
  },
  {
    type: "fill",
    question: "严禁将使用无线上网卡、手机热点的设备接入涉密信息系统。",
    correct: [] // 无填空
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当在注册地省、自治区、直辖市______备案。",
    correct: ["保密行政管理部门"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质分为______、______两个等级。",
    correct: ["甲级", "乙级"]
  },
  {
    type: "fill",
    question: "甲级资质单位可以在全国范围内承担绝密级、机密级、秘密级信息系统集成业务。",
    correct: [] // 无填空
  },
  {
    type: "fill",
    question: "乙级资质单位可以在注册地省、自治区、直辖市行政区域内承担机密级、秘密级信息系统集成业务。",
    correct: [] // 无填空
  },
  {
    type: "fill",
    question: "涉密信息系统集成业务种类包括：系统集成、______、综合布线、______、监理、运行维护、数据恢复、______等。",
    correct: ["软件开发", "安防监控", "其他"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质申请单位应当具备独立法人资格，注册资本不少于______万元人民币。",
    correct: ["300"]
  },
  // === 填空题：51-80 ===
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当具备符合要求的注册资本、______、技术力量、______、场所、______等条件。",
    correct: ["资产", "管理制度", "保密条件"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当建立保密工作机构，配备______保密管理人员。",
    correct: ["专职"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当对参与涉密项目的人员进行______审查，并签订保密承诺书。",
    correct: ["保密"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当对涉密项目实行______管理，明确项目负责人和保密责任。",
    correct: ["全过程"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当对涉密载体实行______编号、______登记、______保管、______清退、______销毁。",
    correct: ["统一", "专人", "专柜", "定期", "集中"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当对涉密计算机和网络实行______、______、______管理。",
    correct: ["分网", "分域", "分级"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当对涉密信息系统的开发、测试、部署、运行、维护等环节实行______控制。",
    correct: ["安全"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当对涉密项目文档实行______管理，防止信息泄露。",
    correct: ["全生命周期"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当定期开展______检查和______评估，及时发现和消除安全隐患。",
    correct: ["保密", "安全"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当制定______预案，定期组织演练。",
    correct: ["保密事件应急"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位发生泄密事件，应当立即采取补救措施，并在______小时内向保密行政管理部门报告。",
    correct: ["24"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当建立______制度，对涉密人员进行定期考核。",
    correct: ["保密考核"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当对涉密项目实行______审计，确保项目合规运行。",
    correct: ["保密"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当对涉密设备和产品实行______管理，防止失控。",
    correct: ["全寿命"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当对涉密会议和活动实行______管理，防止信息泄露。",
    correct: ["全过程"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当对涉密信息发布实行______审批制度。",
    correct: ["分级"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当对涉密人员因私出国（境）实行______审批制度。",
    correct: ["严格"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当对涉密载体的携带实行______审批制度。",
    correct: ["审批"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当对涉密信息的复制、打印、刻录等操作实行______控制。",
    correct: ["技术"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当对涉密信息系统的远程维护实行______审批和______监控。",
    correct: ["严格", "全程"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当对涉密信息系统的外包服务实行______管理，签订保密协议。",
    correct: ["准入"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当对涉密信息系统的供应链安全实行______管理。",
    correct: ["风险"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当对涉密信息系统的数据备份和恢复实行______管理。",
    correct: ["安全"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当对涉密信息系统的日志审计实行______保存。",
    correct: ["长期"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当对涉密信息系统的权限分配实行______原则。",
    correct: ["最小授权"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当对涉密信息系统的密码管理实行______制度。",
    correct: ["分级"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当对涉密信息系统的物理环境实行______防护。",
    correct: ["安全"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当对涉密信息系统的电磁泄漏发射实行______防护。",
    correct: ["屏蔽"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当对涉密信息系统的网络安全实行______防御。",
    correct: ["纵深"]
  },
  {
    type: "fill",
    question: "涉密信息系统集成资质单位应当对涉密信息系统的应用安全实行______检测。",
    correct: ["常态化"]
  },

  // === 判断题：1-30 ===
  {
    type: "truefalse",
    question: "涉密人员应当具有中华人民共和国国籍，无境外永久居留权或者长期居留许可，与境外人员无婚姻关系。",
    correct: true
  },
  {
    type: "truefalse",
    question: "涉密人员与境外人员通婚或者接受境外机构、组织资助的应当向单位报告。",
    correct: true
  },
  {
    type: "truefalse",
    question: "涉密人员发现国家秘密已经泄露或者可能泄露时，应当立即采取补救措施并及时报告。",
    correct: true
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，不得违反规定就业或者出境。",
    correct: true
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由发布与原工作相关的信息。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，应当继续履行保密义务。",
    correct: true
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以参加公开的学术交流活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，不得在境外驻华机构、外商独资企业工作。",
    correct: true
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由使用互联网发表言论。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，应当接受原单位的保密管理。",
    correct: true
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由接受媒体采访。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由撰写与原工作相关的文章。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的培训活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由使用社交媒体发布信息。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的展览活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的会议活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的招聘活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的论坛活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的竞赛活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的评选活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的颁奖活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的庆典活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的发布会活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的签约仪式。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的揭牌仪式。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的剪彩活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的奠基仪式。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的竣工仪式。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的开工仪式。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的落成仪式。",
    correct: false
  },
  // === 判断题：31-80 ===
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的开幕式活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的闭幕式活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的论坛活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的研讨会活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的讲座活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的培训活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的交流活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的考察活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的调研活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的访问活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的会见活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的会谈活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的谈判活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的协商活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的对话活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的沟通活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的合作活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的项目活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的工程活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的建设活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的生产活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的经营活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的管理活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的技术活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的科研活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的教育活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的文化活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的体育活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的娱乐活动。",
    correct: false
  },
  {
    type: "truefalse",
    question: "涉密人员在脱密期内，可以自由参加公开的旅游活动。",
    correct: false
  },

  // === 单选题：1-40 ===
  {
    type: "choice",
    question: "一切国家机关、武装力量、政党、社会团体，（ ）都有保守国家秘密的义务。",
    options: ["国家公务员", "共产党员", "企业事业单位和公民"],
    correct: [2]
  },
  {
    type: "choice",
    question: "各级机关、单位对产生的国家秘密事项，应当按照（ ）及时确定密级。",
    options: ["保密法实施办法", "保密规章制度", "国家秘密及其密级具体范围的规定"],
    correct: [2]
  },
  {
    type: "choice",
    question: "一份文件为秘密级，保密期限是5年，应当标注为（ ）。",
    options: ["秘密5年", "5年★秘密", "秘密★5年"],
    correct: [2]
  },
  {
    type: "choice",
    question: "某文件标注“机密★”，除另有规定外，标识该文件保密期限最长不超过（ ）。",
    options: ["30年", "20年", "10年"],
    correct: [1]
  },
  {
    type: "choice",
    question: "涉密人员离岗、离职前，应当将所保管和使用的涉密载体全部清退，并（ ）。",
    options: ["登记销毁", "订卷归档", "办理移交手续"],
    correct: [2]
  },
  {
    type: "choice",
    question: "变更密级或解密，应由（ ）。",
    options: ["资质单位自行决定", "原定密机关、单位决定，也可以由其上级机关决定", "国家保密行政管理部门指定的单位决定"],
    correct: [1]
  },
  {
    type: "choice",
    question: "传递绝密级秘密载体，（ ）。",
    options: ["只能通过机要交通递送", "只能通过机要通信递送", "必须通过机要交通、机要通信或派人直接递送"],
    correct: [2]
  },
  {
    type: "choice",
    question: "销毁秘密文件、资料要履行（ ）手续，并由两名以上工作人员到指定场所监销。",
    options: ["审批、登记", "交接", "清退"],
    correct: [0]
  },
  {
    type: "choice",
    question: "储存国家秘密信息的介质，应按所储存信息的（ ）密级标明密级，并按相应的密级文件进行管理。",
    options: ["最高", "最低", "相应"],
    correct: [0]
  },
  {
    type: "choice",
    question: "涉密计算机信息系统不得与国际互联网或其他公共信息网络连接，必须实行（ ）。",
    options: ["防火墙隔离", "物理隔离", "逻辑隔离"],
    correct: [1]
  },
  {
    type: "choice",
    question: "储存过国家秘密的信息介质可以（ ）密级使用。",
    options: ["提高", "降低", "解除"],
    correct: [0]
  },
  {
    type: "choice",
    question: "违反《中华人民共和国保守国家秘密法》的规定，（ ）泄露国家秘密，情节严重的，依照刑法有关规定追究刑事责任。",
    options: ["故意", "故意或过失", "过失"],
    correct: [1]
  },
  {
    type: "choice",
    question: "某领导外出时提包被窃，找回后发现包内钱物丢失，涉密文件完整无缺。这一事件（ ）。",
    options: ["属于泄密事件", "不应视为泄密事件", "在不能证明文件未被不应知悉者知悉时，按泄密事件处理"],
    correct: [2]
  },
  {
    type: "choice",
    question: "过失泄露绝密级（ ）件、机密级（ ）件或秘密级（ ）件的，应予立案。",
    options: ["1,2,3", "1,3,3", "1,3,4"],
    correct: [2]
  },
  {
    type: "choice",
    question: "现行《中华人民共和国保守国家秘密法》是由第十四届全国人大常委会第八次会议于（ ）修订通过的。",
    options: ["1988年9月5日", "2024年2月27日", "2010年10月1日"],
    correct: [1]
  },
  {
    type: "choice",
    question: "国家秘密的本质属性是（ ）。",
    options: ["依照法律程序而定", "关系国家安全和利益", "在一定时间内保密"],
    correct: [1]
  },
  {
    type: "choice",
    question: "下列不属于我国刑法规定的保守国家秘密有关罪名的是（ ）。",
    options: ["奸细罪", "为境外的机构、组织、人员非法提供国家秘密罪", "非法获取、持有国家秘密罪"],
    correct: [0]
  },
  {
    type: "choice",
    question: "属于国家秘密的文件资料或者其他物品下落不明的，自发现之日起，某绝密级（ ）日内，机密级、秘密级（ ）日内查无下落的，按泄露国家秘密处理。",
    options: ["10 30", "20 60", "10 60"],
    correct: [2]
  },
  {
    type: "choice",
    question: "涉密打印机与涉密计算机之间（ ）。",
    options: ["采用无线连接方式应当严格遵守规定", "不能采用无线连接方式", "可以采用无线连接方式"],
    correct: [1]
  },
  {
    type: "choice",
    question: "以下不属于保密违法案件查处主要内容的是（ ）。",
    options: ["情况通报", "查明案情", "及时补救"],
    correct: [0]
  },
  {
    type: "choice",
    question: "对保密行政管理部门作出的决定不服的，可自收到本决定书之日起（ ）日内，依法向国家保密局申请行政复议，也可在六个月内依法向人民法院提起行政诉讼。",
    options: ["30", "45", "60"],
    correct: [2]
  },
  {
    type: "choice",
    question: "涉密信息系统集成业务部门负责人对部门的保密管理负（ ）责任。",
    options: ["全面", "具体领导", "直接领导"],
    correct: [2]
  },
  {
    type: "choice",
    question: "法定代表人或者主要负责人对本单位保密工作负（ ）责任。",
    options: ["全面", "具体领导", "直接领导"],
    correct: [0]
  },
  {
    type: "choice",
    question: "保密总监对本单位保密工作负（ ）责任。",
    options: ["全面", "具体领导", "直接领导"],
    correct: [1]
  },
  {
    type: "choice",
    question: "关于国家秘密载体销毁的程序及有关规定正确的是（ ）。",
    options: [
      "只要通过本单位主管部门审核批准，可立即进行销毁",
      "送销国家秘密载体，应当分类封装，送达保密行政管理部门指定的承销单位，无需派专人现场监销",
      "应将需要销毁的国家秘密载体送交销毁工作机构或者保密行政管理部门指定的承销单位销毁，并派出专人现场监销"
    ],
    correct: [2]
  },
  {
    type: "choice",
    question: "涉密人员在离岗脱密期内（ ）。",
    options: ["可以直接出境", "可以使用其他身份出境", "未经审查批准不得擅自出境"],
    correct: [2]
  },
  {
    type: "choice",
    question: "阅读和使用涉密载体（ ），在符合保密要求的办公场所进行。",
    options: ["不需要任何手续", "应当办理登记、签收手续", "需要使用许可"],
    correct: [1]
  },
  {
    type: "choice",
    question: "涉密集成资质申请单位应当依法成立（ ）年以上。",
    options: ["1年", "3年", "5年"],
    correct: [1]
  },
  {
    type: "choice",
    question: "《涉密信息系统集成资质证书》应在（ ）向保密行政管理部门提出延续申请。",
    options: ["有效期届满前3个月内", "有效期届满后", "有效期届满3个月前"],
    correct: [2]
  },
  {
    type: "choice",
    question: "某单位新购置了一批带有无线互联功能的笔记本电脑，准备作为涉密便携式计算机使用，下列做法正确的是（ ）。",
    options: [
      "将便携式计算机确定涉密等级并粘贴密级标志后作为涉密计算机使用",
      "从便携式计算机的BIOS设置中关闭无线网卡功能",
      "拆除具有无线互联网功能的硬件模块，并采取其它符合国家保密要求的技术防护措施"
    ],
    correct: [2]
  },
  {
    type: "choice",
    question: "携带涉密载体参加涉外活动的正确做法是（ ）",
    options: [
      "经审批后采取保护措施，使涉密载体始终处于自己有效控制范围之内",
      "经过领导批准携带外出的，不必采取保护措施",
      "工作需要携带外出的可以不必经过审批，但事后要备案"
    ],
    correct: [0]
  },
  {
    type: "choice",
    question: "关于涉密项目，以下说法错误的是（ ）",
    options: [
      "绝密级、机密级、秘密级的项目可按照法定程序审批后申请保密专利。",
      "资质单位应当按照资质等级、类别承接涉密信息系统集成业务。",
      "资质单位应当对涉密信息系统集成项目实行全过程管理。"
    ],
    correct: [0]
  },
  {
    type: "choice",
    question: "核心涉密人员的脱密期为（ ）",
    options: ["3年至5年", "2年至3年", "按照工龄折算"],
    correct: [1]
  },
  {
    type: "choice",
    question: "张某被界定为重要涉密人员，2020年3月5日因故被单位解聘，他的脱密期最早于（ ）截止。",
    options: ["2020年9月5日", "2021年3月5日", "2022年3月5日"],
    correct: [1]
  },
  {
    type: "choice",
    question: "申请单位隐瞒有关情况或者提供虚假材料的，保密行政管理部门应当作出不予受理或者不予行政许可的决定。自不予受理或者不予行政许可之日起，（ ）内不得再次申请。",
    options: ["1年", "2年", "3年"],
    correct: [0]
  },
  {
    type: "choice",
    question: "资质单位采取欺骗、贿赂等不正当手段取得资质的，保密行政管理部门应当撤销其资质，停止其涉密业务。自撤销之日起，（ ）内不得再次申请。",
    options: ["1年", "2年", "3年"],
    correct: [2]
  },
  {
    type: "choice",
    question: "刑法第三百九十八条规定，国家机关工作人员违反保守国家秘密法的规定，故意或者过失泄露国家秘密，情节特别严重的，处（ ）",
    options: ["十年以上有期徒刑或无期徒刑", "五年以上十年以下有期徒刑", "三年以上七年以下有期徒刑"],
    correct: [2]
  },
  {
    type: "choice",
    question: "涉密人员现场审查保密知识测试存在作弊情形的，扣（ ）分；重大事项未报告的，扣（ ）分。",
    options: ["10 5", "5 10", "10 10"],
    correct: [2]
  },
  {
    type: "choice",
    question: "委托方对涉密信息系统集成项目整体评价为差的，发现一个扣（ ）分,最高扣（ ）分。",
    options: ["1 2", "1 3", "2 4"],
    correct: [1]
  },
  {
    type: "choice",
    question: "如发生泄密事件或者可能泄露国家秘密案件，应当立即采取补救措施，并在发现后（ ）小时内书面向所在地保密行政管理部门报告。",
    options: ["12", "24", "48"],
    correct: [1]
  },
  // === 多选题：1-30 ===
  {
    type: "multichoice",
    question: "涉密人员的责任包括（ ）",
    options: [
      "熟悉并严格执行本岗位的保密制度和保密职责",
      "自觉接受保密教育和保密监督检查",
      "发现泄密隐患或泄密行为及时报告并积极采取补救措施",
      "对本单位的保密工作提出建议"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    type: "multichoice",
    question: "涉密人员上岗前应当经过（ ）",
    options: ["保密教育培训", "掌握保密知识技能", "签订保密承诺书", "通过保密考试"],
    correct: [0, 1, 2, 3]
  },
  {
    type: "multichoice",
    question: "涉密人员出境应当（ ）",
    options: [
      "经有关部门批准",
      "不得携带涉密载体",
      "接受行前保密教育",
      "在境外遵守保密规定"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    type: "multichoice",
    question: "涉密人员离岗离职应当（ ）",
    options: [
      "清退所保管的国家秘密载体",
      "签订离岗离职保密承诺书",
      "接受脱密期管理",
      "移交工作资料"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    type: "multichoice",
    question: "涉密信息系统集成资质单位应当具备的条件包括（ ）",
    options: [
      "独立法人资格",
      "注册资本不少于300万元人民币",
      "3年以上从业经历",
      "健全的保密制度和组织机构"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    type: "multichoice",
    question: "涉密信息系统集成资质业务种类包括（ ）",
    options: [
      "系统集成",
      "软件开发",
      "综合布线",
      "运行维护"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    type: "multichoice",
    question: "涉密信息系统应当配备的保密设施、设备包括（ ）",
    options: [
      "身份鉴别",
      "访问控制",
      "安全审计",
      "密码保护"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    type: "multichoice",
    question: "涉密计算机不得使用（ ）",
    options: [
      "无线键盘",
      "无线鼠标",
      "无线网卡",
      "蓝牙设备"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    type: "multichoice",
    question: "涉密载体的销毁应当（ ）",
    options: [
      "履行清点、登记手续",
      "送交保密行政管理部门设立的销毁工作机构",
      "送交保密行政管理部门指定的承销单位",
      "由单位自行粉碎"
    ],
    correct: [0, 1, 2]
  },
  {
    type: "multichoice",
    question: "涉密会议应当采取的保密措施包括（ ）",
    options: [
      "选择符合保密要求的场所",
      "限定参加人员范围",
      "对参加人员进行保密教育",
      "使用保密会议设备"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    type: "multichoice",
    question: "涉密人员不得有以下行为（ ）",
    options: [
      "非法复制、记录、存储国家秘密",
      "在私人交往和通信中涉及国家秘密",
      "擅自卸载、修改涉密信息系统的安全技术程序",
      "将涉密计算机、涉密存储设备接入互联网"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    type: "multichoice",
    question: "涉密信息系统集成资质单位发生（ ）事项变更的，应当在变更后10日内向保密行政管理部门报告。",
    options: [
      "单位名称",
      "法定代表人",
      "注册地址",
      "注册资本"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    type: "multichoice",
    question: "涉密项目管理应当做到（ ）",
    options: [
      "明确项目负责人",
      "制定保密方案",
      "签订保密协议",
      "实行全过程管理"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    type: "multichoice",
    question: "涉密信息系统的安全策略应当包括（ ）",
    options: [
      "物理安全",
      "网络安全",
      "主机安全",
      "应用安全"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    type: "multichoice",
    question: "涉密人员在脱密期内应当（ ）",
    options: [
      "继续履行保密义务",
      "不得违反规定就业",
      "不得擅自出境",
      "接受原单位管理"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    type: "multichoice",
    question: "涉密载体的复制应当（ ）",
    options: [
      "经本机关、本单位负责人批准",
      "履行登记手续",
      "复制件加盖复制单位戳记",
      "视同原件管理"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    type: "multichoice",
    question: "涉密信息系统集成资质单位应当定期开展（ ）",
    options: [
      "保密检查",
      "安全风险评估",
      "应急演练",
      "人员培训"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    type: "multichoice",
    question: "涉密信息系统应当实行（ ）",
    options: [
      "分网运行",
      "分级保护",
      "权限控制",
      "日志审计"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    type: "multichoice",
    question: "涉密人员应当报告的个人重大事项包括（ ）",
    options: [
      "与境外人员结婚",
      "子女移居国（境）外",
      "接受境外组织资助",
      "配偶子女在国外工作"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    type: "multichoice",
    question: "涉密信息系统集成资质单位应当对涉密项目实行（ ）",
    options: [
      "保密审查",
      "过程监督",
      "质量控制",
      "档案管理"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    type: "multichoice",
    question: "涉密计算机的使用应当（ ）",
    options: [
      "设置开机密码",
      "安装防病毒软件",
      "定期进行安全检查",
      "禁止使用非涉密U盘"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    type: "multichoice",
    question: "涉密信息系统的开发应当（ ）",
    options: [
      "实行安全开发",
      "进行代码审计",
      "开展安全测试",
      "留存开发文档"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    type: "multichoice",
    question: "涉密信息系统集成资质单位应当建立（ ）",
    options: [
      "保密工作责任制",
      "保密教育培训制度",
      "涉密载体管理制度",
      "保密检查制度"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    type: "multichoice",
    question: "涉密信息系统应当采取的技术防护措施包括（ ）",
    options: [
      "防火墙",
      "入侵检测",
      "安全审计",
      "数据加密"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    type: "multichoice",
    question: "涉密人员在境外应当（ ）",
    options: [
      "不谈论国家秘密",
      "不携带涉密资料",
      "不使用不安全通信工具",
      "不参加不明身份人员组织的活动"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    type: "multichoice",
    question: "涉密信息系统集成资质单位发生泄密事件应当（ ）",
    options: [
      "立即采取补救措施",
      "24小时内报告",
      "配合调查",
      "追究责任"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    type: "multichoice",
    question: "涉密信息系统的运行维护应当（ ）",
    options: [
      "实行授权操作",
      "记录操作日志",
      "定期安全评估",
      "及时修复漏洞"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    type: "multichoice",
    question: "涉密信息系统集成资质单位应当对涉密人员进行（ ）",
    options: [
      "岗前培训",
      "在岗教育",
      "离岗教育",
      "脱密期管理"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    type: "multichoice",
    question: "涉密信息系统的数据备份应当（ ）",
    options: [
      "使用涉密介质",
      "异地存放",
      "加密存储",
      "专人管理"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    type: "multichoice",
    question: "涉密信息系统集成资质单位应当对涉密项目文档（ ）",
    options: [
      "统一编号",
      "专人保管",
      "借阅登记",
      "及时归还"
    ],
    correct: [0, 1, 2, 3]
  },

  // === 简答题：1-21 ===
  {
    type: "short",
    question: "什么是国家秘密？",
    correct: [
      "国家秘密是关系国家安全和利益，依照法定程序确定，在一定时间内只限一定范围的人员知悉的事项。"
    ]
  },
  {
    type: "short",
    question: "国家秘密的基本范围包括哪些？",
    correct: [
      "国家事务重大决策中的秘密事项；",
      "国防建设和武装力量活动中的秘密事项；",
      "外交和外事活动中的秘密事项以及对外承担保密义务的秘密事项；",
      "国民经济和社会发展中的秘密事项；",
      "科学技术中的秘密事项；",
      "维护国家安全活动和追查刑事犯罪中的秘密事项；",
      "经国家保密行政管理部门确定的其他秘密事项。"
    ]
  },
  {
    type: "short",
    question: "国家秘密的密级分为哪三级？",
    correct: [
      "绝密、机密、秘密三级。"
    ]
  },
  {
    type: "short",
    question: "国家秘密的保密期限是如何规定的？",
    correct: [
      "除另有规定外，绝密级不超过三十年，机密级不超过二十年，秘密级不超过十年。"
    ]
  },
  {
    type: "short",
    question: "国家秘密的知悉范围如何确定？",
    correct: [
      "应当根据工作需要限定在最小必要范围，并限定到具体人员。"
    ]
  },
  {
    type: "short",
    question: "什么是涉密信息系统？",
    correct: [
      "涉密信息系统是指存储、处理国家秘密的计算机信息系统。"
    ]
  },
  {
    type: "short",
    question: "涉密信息系统实行什么保护原则？",
    correct: [
      "按照涉密程度实行分级保护。"
    ]
  },
  {
    type: "short",
    question: "涉密信息系统投入使用前必须经过什么程序？",
    correct: [
      "必须经过保密行政管理部门检查合格后，方可投入使用。"
    ]
  },
  {
    type: "short",
    question: "涉密计算机和涉密存储设备严禁接入哪些网络？",
    correct: [
      "严禁接入互联网及其他公共信息网络。"
    ]
  },
  {
    type: "short",
    question: "涉密计算机和移动存储介质未经技术处理，不得如何处理？",
    correct: [
      "不得赠送、出售、丢弃。"
    ]
  },
  {
    type: "short",
    question: "什么是涉密人员？",
    correct: [
      "涉密人员是指在涉密岗位工作的人员。"
    ]
  },
  {
    type: "short",
    question: "涉密人员上岗前应当经过哪些程序？",
    correct: [
      "应当经过保密教育培训，掌握保密知识技能，签订保密承诺书，严格遵守保密规章制度。"
    ]
  },
  {
    type: "short",
    question: "涉密人员出境应当履行什么手续？",
    correct: [
      "应当经有关部门批准。"
    ]
  },
  {
    type: "short",
    question: "涉密人员离岗离职应当履行什么手续？",
    correct: [
      "应当清退所保管的国家秘密载体，并签订离岗离职保密承诺书。"
    ]
  },
  {
    type: "short",
    question: "什么是脱密期？",
    correct: [
      "脱密期是指涉密人员离开涉密岗位后，为防止其泄露国家秘密而设定的管理期限。"
    ]
  },
  {
    type: "short",
    question: "涉密载体的传递应当通过哪些方式？",
    correct: [
      "应当通过机要交通、机要通信或者专人进行。"
    ]
  },
  {
    type: "short",
    question: "涉密载体的复制应当履行哪些手续？",
    correct: [
      "应当经本机关、本单位负责人批准，履行登记手续，复制件加盖复制单位戳记，并视同原件管理。"
    ]
  },
  {
    type: "short",
    question: "举办涉密会议应当采取哪些保密措施？",
    correct: [
      "选择符合保密要求的场所；限定参加人员范围；对参加人员进行保密教育；使用保密会议设备；妥善保管会议文件资料。"
    ]
  },
  {
    type: "short",
    question: "涉密信息系统集成资质分为哪两个等级？",
    correct: [
      "甲级和乙级两个等级。"
    ]
  },
  {
    type: "short",
    question: "甲级资质单位可以承担哪些级别的涉密集成业务？",
    correct: [
      "可以在全国范围内承担绝密级、机密级、秘密级信息系统集成业务。"
    ]
  },
  {
    type: "short",
    question: "涉密信息系统集成资质单位发生泄密事件应当如何处理？",
    correct: [
      "应当立即采取补救措施，并在24小时内向所在地保密行政管理部门报告，配合调查，追究责任。"
    ]
  }
];

// === 完整 data.js 文件结束 ===