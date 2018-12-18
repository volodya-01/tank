window.onload=function(){
    //创建outboxdiv节点
    var outboxdiv = document.createElement("div");
    outboxdiv.id = "outboxdiv";
    outboxdiv.style.cssText = "width:360px;height:100%;margin:100px 500px;"
    document.body.appendChild(outboxdiv);
    //创建outboxdiv的子节点titlediv
    var titlediv = document.createElement("div")
    titlediv.innerHTML = "管道属性"
    titlediv.style.cssText = "height:40px;width:100%;"
    document.getElementById("outboxdiv").appendChild(titlediv);
    //创建outboxdiv的子节点newdiv
    var newdiv = document.createElement("div");
    newdiv.className = "switch-animate switch-on"
    newdiv.id = "switch_div"
    newdiv.style.cssText =
        "width: 360px;height: 400px;overflow:auto;"
    document.getElementById("outboxdiv").appendChild(newdiv);
    //创建newdiv的子节点
    var son1 = document.createElement("div");
    son1.id = "son1_div"
    son1.style.cssText =
        "width:100%;height:100%;"
    document.getElementById("switch_div").appendChild(son1)
    //for循环，创建son1的子节点
    for (var i = 0; i < 17; i++) {
        var sonson1 = document.createElement('div');
        sonson1.id = "sonson_1" + i
        sonson1.className = "tbox"
        if (i % 2 == 0) {
            sonson1.className = "box"
        }
        sonson1.style.cssText =
            "display: -webkit-box;display: -webkit-flex; display: -ms-flexbox;display:flex;flex-direction:row;flex-wrap:nowrap;justif-content: center;align-items: center;width:100%;height:30px;"
        document.getElementById("son1_div").appendChild(sonson1)

    }

    /* 设置隔行变色 */
    var alist = document.getElementsByClassName("box");
    if (alist) {
        for (var idx = 0; idx < alist.length; idx++) {
            var mya = alist[idx];
            mya.style.backgroundColor = "#ededed";
            var sonson1left = document.createElement("div")
            var sonson1right = document.createElement("div")
            sonson1left.id = "sonson1left_1"
            sonson1right.id = "sonson1right_1" + idx
            sonson1left.className = "leftbox"
            sonson1right.className = "rightbox"
            sonson1left.style.cssText =
                "width:50%;height:30px;border-right:1px #e0e0e0 solid;text-align:start;line-height:30px;padding-right:10px;margin-left:10px;font-size:12px;"
            sonson1right.style.cssText =
                "width:50%;height:30px;text-align:start;line-height:30px;padding-left:10px;font-size:12px;"
            /*    sonson1right.innerHTML = "1000"; */
            mya.appendChild(sonson1left)
            mya.appendChild(sonson1right)
        }
    }
    var tboxlist = document.getElementsByClassName("tbox");
    if (tboxlist) {
        for (var tx = 0; tx < tboxlist.length; tx++) {
            var tya = tboxlist[tx];
            var sonson1left = document.createElement("div")
            var sonson1right = document.createElement("div")
            sonson1left.id = "sonson1left_1"
            sonson1right.id = "sonson1right_1" + tx
            sonson1left.className = "leftbox"
            sonson1right.className = "rightbox"
            sonson1left.style.cssText =
                "width:50%;height:30px;border-right:1px #e0e0e0 solid;text-align:start;line-height:30px;padding-right:10px;margin-left:10px;font-size:12px;"
            sonson1right.style.cssText =
                "width:50%;height:30px;text-align:start;line-height:30px;padding-left:10px;font-size:12px;"
            tya.appendChild(sonson1left)
            tya.appendChild(sonson1right)
        }
    }
    //在每行的左右两边添加节点或插入文本
    //在每行的左边添加插入文本
    var texttitle = ["流量", "流速", "水头损失", "地址", "分公司", "管径", "管材", "管长", "阻力系数", "状态", "管龄", "安装年代", "今日流向变化", "模型ID",
        "GIS编号", "起始节点", "终止节点"
    ]
    var leftboxtotal = document.getElementsByClassName("leftbox")
    console.log(leftboxtotal)
    for (ltbox = 0; ltbox < leftboxtotal.length; ltbox++) {
        leftboxtotal[ltbox].innerHTML = texttitle[ltbox]
    }
    //向右侧每一行添加span标签
    var rightboxtotal = document.getElementsByClassName("rightbox")
    for (sp = 0; sp < 5; sp++) {
        var spantext = document.createElement("span")
        spantext.className = "spanboxt"
        spantext.innerHTML = "数据"
        spantext.style.cssText =
            "display:inline-block;width:35px;height:20px;line-height20px;"
        rightboxtotal[sp].appendChild(spantext)
        var spantext2 = document.createElement("span")
        spantext2.className = "spanboxt2"
        spantext2.innerHTML = "单位"
        spantext2.style.cssText =
            "display:inline-block;width:40px;height:20px;line-height20px;"
        rightboxtotal[sp].appendChild(spantext2)

    }

    for (sp = 6; sp < 8; sp++) {
        var spantext = document.createElement("span")
        spantext.className = "spanboxt"
        spantext.innerHTML = "数据"
        spantext.style.cssText =
            "display:inline-block;width:35px;height:20px;line-height20px;"
        rightboxtotal[sp].appendChild(spantext)
        var spantext2 = document.createElement("span")
        spantext2.className = "spanboxt2"
        spantext2.innerHTML = "单位"
        spantext2.style.cssText =
            "display:inline-block;width:35px;height:20px;line-height20px;"
        rightboxtotal[sp].appendChild(spantext2)

    }

    for (sp = 10; sp < 17; sp++) {
        var spantext = document.createElement("span")
        spantext.className = "spanboxt"
        spantext.innerHTML = "数据"
        spantext.style.cssText =
            "display:inline-block;width:35px;height:20px;line-height20px; "
        rightboxtotal[sp].appendChild(spantext)
        var spantext2 = document.createElement("span")
        spantext2.className = "spanboxt2"
        spantext2.innerHTML = "单位"
        spantext2.style.cssText =
            "display:inline-block;width:40px;height:20px;line-height20px;"
        rightboxtotal[sp].appendChild(spantext2)

    }

    //在指定的rightboxtotal[5],rightboxtotal[8],rightboxtotal[9]签里创建子节点
    //在指定的rightboxtotal[5]签里创建子节点
    var inputbox = document.createElement("input")
    inputbox.id = "inputbox"
    inputbox.style.cssText = "width:80px;height:20px;border:1px #ededed solid;margin-right:5px;"
    rightboxtotal[5].appendChild(inputbox)
    document.getElementById("inputbox").setAttribute("placeholder", "请输入信息")
    //在inputbox后创建兄弟节点
    var spanbox = document.createElement("span")
    spanbox.innerHTML = "MPa"
    rightboxtotal[5].insertBefore(spanbox, null);
    //在指定的rightboxtotal[8]签里创建子节点
    var inputbox8 = document.createElement("input")
    inputbox8.id = "inputbox8"
    inputbox8.style.cssText = "width:80px;height:20px;border:1px #ededed solid;margin-right:5px;"
    rightboxtotal[8].appendChild(inputbox8)
    document.getElementById("inputbox8").setAttribute("placeholder", "请输入信息")
    //在inputbox后创建兄弟节点
    var spanbox8 = document.createElement("span")
    spanbox8.innerHTML = "MPa"
    rightboxtotal[8].insertBefore(spanbox8, null);

    //在指定的rightboxtotal[9]签里创建子节点
    var selectbox = document.createElement("select")
    selectbox.id = "selectbox"
    selectbox.style.cssText = "width:80px;height:20px;border:1px #ededed solid;margin-right:5px;"
    rightboxtotal[9].appendChild(selectbox)
    //在selectbox标签里创建子节点option
    var optionbox = document.createElement("option")
    optionbox.id = "optionbox"
    optionbox.style.cssText = "width:80px;height:20px;border:1px #ededed solid;background-color:#fff;color:#000"
    optionbox.innerHTML = "开"
    document.getElementById("selectbox").setAttribute("value", "开")
    document.getElementById("selectbox").appendChild(optionbox)
    var optionbox2 = document.createElement("option")
    optionbox2.id = "optionbox2"
    optionbox2.style.cssText = "width:80px;height:20px;border:1px #ededed solid;background-color:#fff;color:#000"
    optionbox2.innerHTML = "关"
    document.getElementById("selectbox").setAttribute("value", "关")
    document.getElementById("selectbox").appendChild(optionbox2)

    //创建son1后插入节点buttonboxdiv
    var buttonboxdiv = document.createElement("div")
    buttonboxdiv.id = "buttonboxdiv"
    buttonboxdiv.style.cssText = "height:40px;width:50%;margin-top:0px;position:relative;left:140px"
    document.getElementById("son1_div").insertBefore(buttonboxdiv, null);
    //创建buttonboxdiv的子节点button
    var buttonbox = document.createElement("button")
    var buttonbox2 = document.createElement("button")
    buttonbox.innerHTML = "确定"
    buttonbox2.innerHTML = "取消"
    buttonbox.style.cssText =
        "height:30px;width:60px;background-color:#e5e5e5;margin-top:15px;margin-bottom:-15px;margin-right:20px"
    buttonbox2.style.cssText = "height:30px;width:60px;background-color:#e5e5e5;margin-top:15px;margin-bottom:-15px"
    document.getElementById("buttonboxdiv").appendChild(buttonbox);
    document.getElementById("buttonboxdiv").appendChild(buttonbox2);
    //在buttonboxdiv后插入节点lastboxdiv
    /*  var lastboxdiv = document.createElement("div")
    lastboxdiv.id = "lastboxdiv"
    lastboxdiv.innerHTML = "缩放至"
    lastboxdiv.style.cssText = "height:20px;width:100%;margin-top:15px;color:blue;cursor: pointer;"
    document.getElementById("buttonboxdiv").insertBefore(lastboxdiv, null);
 */

}