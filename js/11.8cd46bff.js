"use strict";(self["webpackChunkCrax_me"]=self["webpackChunkCrax_me"]||[]).push([[11],{4318:function(){},2011:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var l=a(640),i=(a(5331),a(5616),a(4275)),n=a(8165),o=a(753),s=a(4880),c=(a(4318),a(7815)),d=(a(8785),a(5970),a(9104),a(683)),h=(a(5385),a(47)),r=(a(9648),a(7009)),m=(a(8450),a(850)),u=(a(8736),a(7128),a(1450)),p=(a(213),a(8162)),b=(a(6055),a(8830),a(3597),a(9623)),g=(a(9092),a(6768)),k=a(4232),f=a(5130);const F={class:"container"},C={class:"header-content"},y={class:"search-card"},T={class:"stats"},v={class:"actions"},w={class:"el-dropdown-link"},D={class:"content"},$=["src"],_={class:"image-overlay"},U={class:"overlay-buttons"},x={class:"file-info"},S={class:"pagination-container"},W={class:"detail-actions"},L=["src"];function V(e,t,a,V,B,X){const z=b.WK,I=(0,g.g2)("font-awesome-icon"),E=p.c6,G=p.Iy,A=p.dW,P=u.R7,q=s.bZ,N=m.dI,O=r.Zq,K=h.S2,R=d.Ik,j=c.aQ,H=s.ZO,Q=s.lX,Y=o.MF,Z=o.TS,M=n.fR,J=i.v$,ee=i.q,te=l.kZ;return(0,g.uX)(),(0,g.CE)("div",F,[(0,g.bF)(Q,null,{default:(0,g.k6)((()=>[(0,g.bF)(q,null,{default:(0,g.k6)((()=>[(0,g.Lk)("div",C,[(0,g.Lk)("span",{class:"title",onClick:t[0]||(t[0]=(...e)=>X.refreshDashboard&&X.refreshDashboard(...e))},"Dashboard"),(0,g.Lk)("div",y,[(0,g.bF)(z,{modelValue:B.search,"onUpdate:modelValue":t[1]||(t[1]=e=>B.search=e),size:"mini",placeholder:"Nhập từ khóa tìm kiếm"},null,8,["modelValue"])]),(0,g.Lk)("span",T,[(0,g.bF)(I,{icon:"database",class:"fa-database"}),(0,g.eW)(" Tổng số Files: "+(0,k.v_)(B.Number),1)]),(0,g.Lk)("div",v,[(0,g.bF)(P,{disabled:X.disableTooltip,content:"Sắp xếp",placement:"bottom"},{default:(0,g.k6)((()=>[(0,g.bF)(A,{onCommand:X.sort,"hide-on-click":!1},{dropdown:(0,g.k6)((()=>[(0,g.bF)(G,null,{default:(0,g.k6)((()=>[(0,g.bF)(E,{command:"dateDesc"},{default:(0,g.k6)((()=>t[15]||(t[15]=[(0,g.eW)("Sắp xếp theo thời gian giảm dần")]))),_:1}),(0,g.bF)(E,{command:"nameAsc"},{default:(0,g.k6)((()=>t[16]||(t[16]=[(0,g.eW)("Sắp xếp theo tên tăng dần")]))),_:1})])),_:1})])),default:(0,g.k6)((()=>[(0,g.Lk)("span",w,[(0,g.bF)(I,{icon:X.sortIcon,class:"header-icon"},null,8,["icon"])])])),_:1},8,["onCommand"])])),_:1},8,["disabled"]),(0,g.bF)(P,{disabled:X.disableTooltip,content:"Chọn tất cả",placement:"bottom"},{default:(0,g.k6)((()=>[(0,g.bF)(I,{icon:"check-square",class:"header-icon",onClick:X.toggleSelectAll},null,8,["onClick"])])),_:1},8,["disabled"]),(0,g.bF)(P,{disabled:X.disableTooltip,content:"Sao chép hàng loạt",placement:"bottom"},{default:(0,g.k6)((()=>[(0,g.bF)(I,{icon:"link",class:(0,k.C4)(["header-icon",{disabled:0===B.selectedFiles.length}]),onClick:X.handleBatchCopy},null,8,["class","onClick"])])),_:1},8,["disabled"]),(0,g.bF)(P,{disabled:X.disableTooltip,content:"Xóa hàng loạt",placement:"bottom"},{default:(0,g.k6)((()=>[(0,g.bF)(I,{icon:"trash-alt",class:(0,k.C4)(["header-icon",{disabled:0===B.selectedFiles.length}]),onClick:X.handleBatchDelete},null,8,["class","onClick"])])),_:1},8,["disabled"]),(0,g.bF)(P,{disabled:X.disableTooltip,content:"Quản lý người dùng",placement:"bottom"},{default:(0,g.k6)((()=>[(0,g.bF)(I,{icon:"user-cog",class:"header-icon",onClick:X.handleGoToAdmin},null,8,["onClick"])])),_:1},8,["disabled"]),(0,g.bF)(P,{disabled:X.disableTooltip,content:"Quay lại trang tải lên",placement:"bottom"},{default:(0,g.k6)((()=>[(0,g.bF)(I,{icon:"upload",class:"header-icon",onClick:X.handleGoUpload},null,8,["onClick"])])),_:1},8,["disabled"]),(0,g.bF)(P,{disabled:X.disableTooltip,content:"Đăng xuất",placement:"bottom"},{default:(0,g.k6)((()=>[(0,g.bF)(I,{icon:"sign-out-alt",class:"header-icon",onClick:X.handleLogout},null,8,["onClick"])])),_:1},8,["disabled"])])])])),_:1}),(0,g.bF)(H,{class:"main-container"},{default:(0,g.k6)((()=>[(0,g.Lk)("div",D,[((0,g.uX)(!0),(0,g.CE)(g.FK,null,(0,g.pI)(X.paginatedTableData,((e,a)=>((0,g.uX)(),(0,g.Wv)(R,{key:a,class:"img-card"},{default:(0,g.k6)((()=>[(0,g.bF)(N,{modelValue:e.selected,"onUpdate:modelValue":t=>e.selected=t},null,8,["modelValue","onUpdate:modelValue"]),e.metadata?.FileType?.includes("video")||e.metadata?.FileType?.includes("audio")?((0,g.uX)(),(0,g.CE)("video",{key:0,src:"/file/"+e.name,autoplay:"",muted:"",loop:"",class:"video-preview",onClick:t[2]||(t[2]=(...e)=>X.handleVideoClick&&X.handleVideoClick(...e))},null,8,$)):((0,g.uX)(),(0,g.Wv)(O,{key:1,"preview-teleported":!0,src:"/file/"+e.name,"preview-src-list":e.previewSrcList,fit:"cover",lazy:"",class:"image-preview"},null,8,["src","preview-src-list"])),(0,g.Lk)("div",_,[(0,g.Lk)("div",U,[(0,g.bF)(P,{disabled:X.disableTooltip,content:"Sao chép liên kết",placement:"top"},{default:(0,g.k6)((()=>[(0,g.bF)(K,{size:"mini",type:"primary",onClick:(0,f.D$)((t=>X.handleCopy(a,e.name)),["stop"])},{default:(0,g.k6)((()=>[(0,g.bF)(I,{icon:"copy"})])),_:2},1032,["onClick"])])),_:2},1032,["disabled"]),(0,g.bF)(P,{disabled:X.disableTooltip,content:"Tải xuống",placement:"top"},{default:(0,g.k6)((()=>[(0,g.bF)(K,{size:"mini",type:"primary",onClick:(0,f.D$)((t=>X.handleDownload(e.name)),["stop"])},{default:(0,g.k6)((()=>[(0,g.bF)(I,{icon:"download"})])),_:2},1032,["onClick"])])),_:2},1032,["disabled"]),(0,g.bF)(P,{disabled:X.disableTooltip,content:"Chi tiết",placement:"top"},{default:(0,g.k6)((()=>[(0,g.bF)(K,{size:"mini",type:"primary",onClick:(0,f.D$)((t=>X.openDetailDialog(a,e.name)),["stop"])},{default:(0,g.k6)((()=>[(0,g.bF)(I,{icon:"info"})])),_:2},1032,["onClick"])])),_:2},1032,["disabled"]),(0,g.bF)(P,{disabled:X.disableTooltip,content:"Xóa",placement:"top"},{default:(0,g.k6)((()=>[(0,g.bF)(K,{size:"mini",type:"danger",onClick:(0,f.D$)((t=>X.handleDelete(a,e.name)),["stop"])},{default:(0,g.k6)((()=>[(0,g.bF)(I,{icon:"trash-alt"})])),_:2},1032,["onClick"])])),_:2},1032,["disabled"])])]),(0,g.Lk)("div",x,(0,k.v_)(e.metadata?.FileName||e.name),1)])),_:2},1024)))),128))]),(0,g.Lk)("div",S,[(0,g.bF)(j,{background:"",layout:"prev, pager, next",total:X.filteredTableData.length,"page-size":B.pageSize,onCurrentChange:X.handlePageChange,"current-page":B.currentPage},null,8,["total","page-size","onCurrentChange","current-page"])])])),_:1})])),_:1}),(0,g.bF)(te,{title:"Chi tiết tệp",modelValue:B.showdetailDialog,"onUpdate:modelValue":t[14]||(t[14]=e=>B.showdetailDialog=e),width:X.dialogWidth,center:""},{default:(0,g.k6)((()=>[(0,g.bF)(Z,{direction:"vertical",border:"",column:X.tableColumnNum},{extra:(0,g.k6)((()=>[(0,g.Lk)("div",W,[(0,g.bF)(K,{type:"primary",onClick:t[3]||(t[3]=e=>X.handleDownload(B.detailFile?.name)),round:"",size:"small"},{default:(0,g.k6)((()=>[(0,g.bF)(I,{icon:"download",style:{"margin-right":"3px"}}),t[17]||(t[17]=(0,g.eW)(" Tải xuống "))])),_:1}),(0,g.bF)(K,{type:"primary",onClick:t[4]||(t[4]=e=>X.handleBlock(B.detailFile?.name)),round:"",size:"small"},{default:(0,g.k6)((()=>[(0,g.bF)(I,{icon:"ban",style:{"margin-right":"3px"}}),t[18]||(t[18]=(0,g.eW)(" Danh sách đen "))])),_:1}),(0,g.bF)(K,{type:"primary",onClick:t[5]||(t[5]=e=>X.handleWhite(B.detailFile?.name)),round:"",size:"small"},{default:(0,g.k6)((()=>[(0,g.bF)(I,{icon:"user-plus",style:{"margin-right":"3px"}}),t[19]||(t[19]=(0,g.eW)(" Danh sách trắng "))])),_:1}),(0,g.bF)(K,{type:"danger",onClick:t[6]||(t[6]=e=>X.handleDetailDelete(B.detailFile?.name)),round:"",size:"small"},{default:(0,g.k6)((()=>[(0,g.bF)(I,{icon:"trash-alt",style:{"margin-right":"3px"}}),t[20]||(t[20]=(0,g.eW)(" Xóa "))])),_:1})])])),default:(0,g.k6)((()=>[(0,g.bF)(Y,{label:"Xem trước tệp",rowspan:X.tablePreviewSpan,width:300,align:"center"},{default:(0,g.k6)((()=>[B.detailFile?.metadata?.FileType?.includes("video")||B.detailFile?.metadata?.FileType?.includes("audio")?((0,g.uX)(),(0,g.CE)("video",{key:0,src:"/file/"+B.detailFile?.name,autoplay:"",muted:"",loop:"",class:"video-preview",onClick:t[7]||(t[7]=(...e)=>X.handleVideoClick&&X.handleVideoClick(...e))},null,8,L)):((0,g.uX)(),(0,g.Wv)(O,{key:1,src:"/file/"+B.detailFile?.name,fit:"cover",lazy:"",class:"image-preview"},null,8,["src"]))])),_:1},8,["rowspan"]),(0,g.bF)(Y,{label:"Tên tệp","class-name":"description-item"},{default:(0,g.k6)((()=>[(0,g.eW)((0,k.v_)(B.detailFile?.metadata?.FileName||B.detailFile?.name),1)])),_:1}),(0,g.bF)(Y,{label:"Trạng thái truy cập","class-name":"description-item"},{default:(0,g.k6)((()=>[(0,g.eW)((0,k.v_)(X.accessType),1)])),_:1}),(0,g.bF)(Y,{label:"Thời gian tải lên","class-name":"description-item"},{default:(0,g.k6)((()=>[(0,g.eW)((0,k.v_)(new Date(B.detailFile?.metadata?.TimeStamp).toLocaleString()||"Không xác định"),1)])),_:1}),(0,g.bF)(Y,{label:"IP tải lên","class-name":"description-item"},{default:(0,g.k6)((()=>[(0,g.eW)((0,k.v_)(B.detailFile?.metadata?.UploadIP||"Không xác định"),1)])),_:1}),(0,g.bF)(Y,{label:"Kênh tải lên","class-name":"description-item"},{default:(0,g.k6)((()=>[(0,g.eW)((0,k.v_)(B.detailFile?.metadata?.Channel||"Không xác định"),1)])),_:1}),(0,g.bF)(Y,{label:"Loại tệp","class-name":"description-item"},{default:(0,g.k6)((()=>[(0,g.eW)((0,k.v_)(B.detailFile?.metadata?.FileType||"Không xác định"),1)])),_:1}),(0,g.bF)(Y,{label:"Kết quả kiểm duyệt","class-name":"description-item"},{default:(0,g.k6)((()=>[(0,g.eW)((0,k.v_)(B.detailFile?.metadata?.Label||"Không có"),1)])),_:1})])),_:1},8,["column"]),(0,g.bF)(M),(0,g.bF)(ee,{modelValue:B.activeUrlTab,"onUpdate:modelValue":t[13]||(t[13]=e=>B.activeUrlTab=e),onTabClick:X.handleTabClick},{default:(0,g.k6)((()=>[(0,g.bF)(J,{label:"Liên kết gốc",name:"originUrl"},{default:(0,g.k6)((()=>[(0,g.bF)(z,{modelValue:X.allUrl.originUrl,"onUpdate:modelValue":t[8]||(t[8]=e=>X.allUrl.originUrl=e),readonly:"",onClick:X.handleUrlClick},null,8,["modelValue","onClick"])])),_:1}),(0,g.bF)(J,{label:"Markdown",name:"mdUrl"},{default:(0,g.k6)((()=>[(0,g.bF)(z,{modelValue:X.allUrl.mdUrl,"onUpdate:modelValue":t[9]||(t[9]=e=>X.allUrl.mdUrl=e),readonly:"",onClick:X.handleUrlClick},null,8,["modelValue","onClick"])])),_:1}),(0,g.bF)(J,{label:"HTML",name:"htmlUrl"},{default:(0,g.k6)((()=>[(0,g.bF)(z,{modelValue:X.allUrl.htmlUrl,"onUpdate:modelValue":t[10]||(t[10]=e=>X.allUrl.htmlUrl=e),readonly:"",onClick:X.handleUrlClick},null,8,["modelValue","onClick"])])),_:1}),(0,g.bF)(J,{label:"BBCode",name:"bbUrl"},{default:(0,g.k6)((()=>[(0,g.bF)(z,{modelValue:X.allUrl.bbUrl,"onUpdate:modelValue":t[11]||(t[11]=e=>X.allUrl.bbUrl=e),readonly:"",onClick:X.handleUrlClick},null,8,["modelValue","onClick"])])),_:1}),B.detailFile?.metadata?.TgFileId?((0,g.uX)(),(0,g.Wv)(J,{key:0,label:"TG File ID",name:"tgId"},{default:(0,g.k6)((()=>[(0,g.bF)(z,{modelValue:X.allUrl.tgId,"onUpdate:modelValue":t[12]||(t[12]=e=>X.allUrl.tgId=e),readonly:"",onClick:X.handleUrlClick},null,8,["modelValue","onClick"])])),_:1})):(0,g.Q3)("",!0)])),_:1},8,["modelValue","onTabClick"])])),_:1},8,["modelValue","width"])])}a(4114);var B=a(782),X={data(){return{Number:0,showLogoutButton:!1,tableData:[],search:"",currentPage:1,pageSize:30,selectedFiles:[],sortOption:"dateDesc",isUploading:!1,showdetailDialog:!1,detailFile:null,activeUrlTab:"originUrl",allSelected:!1}},computed:{...(0,B.L8)(["credentials"]),filteredTableData(){return this.tableData.filter((e=>!this.search||e.name.toLowerCase().includes(this.search.toLowerCase())||e.metadata?.FileName?.toLowerCase().includes(this.search.toLowerCase())))},paginatedTableData(){const e=this.sortData(this.filteredTableData),t=(this.currentPage-1)*this.pageSize,a=t+this.pageSize;let l=e.slice(t,a);const i=l.filter((e=>!e.metadata?.FileType?.includes("video"))).map((e=>`/file/${e.name}`));return l.forEach((e=>{e.metadata?.FileType?.includes("video")||(e.previewSrcList=i.slice(i.indexOf(`/file/${e.name}`)).concat(i.slice(0,i.indexOf(`/file/${e.name}`))))})),l},sortIcon(){return"dateDesc"===this.sortOption?"sort-amount-down":"sort-alpha-up"},dialogWidth(){return window.innerWidth>768?"60%":"90%"},accessType(){return"White"===this.detailFile?.metadata?.ListType?"Bình thường":"Block"===this.detailFile?.metadata?.ListType||"adult"===this.detailFile?.metadata?.Label?"Bị hạn chế":"Bình thường"},allUrl(){return{originUrl:`${document.location.origin}/file/${this.detailFile?.name}`,mdUrl:`![${this.detailFile?.metadata?.FileName||this.detailFile?.name}](${document.location.origin}/file/${this.detailFile?.name})`,htmlUrl:`<img src="${document.location.origin}/file/${this.detailFile?.name}" alt="${this.detailFile?.metadata?.FileName||this.detailFile?.name}" width=100%>`,bbUrl:`[img]${document.location.origin}/file/${this.detailFile?.name}[/img]`,tgId:this.detailFile?.metadata?.TgFileId||"Không xác định"}},tableColumnNum(){return window.innerWidth>768?3:1},tablePreviewSpan(){return window.innerWidth>768?2:1},disableTooltip(){return window.innerWidth<768}},watch:{tableData:{handler(e){this.selectedFiles=e.filter((e=>e.selected))},deep:!0},sortOption(e){localStorage.setItem("sortOption",e)},allSelected(e){this.tableData.forEach((t=>{t.selected!==e&&(t.selected=e)}))}},methods:{refreshDashboard(){location.reload()},handleDownload(e){const t=document.createElement("a");t.href=`/file/${e}`,t.download=e,t.click()},openDetailDialog(e,t){this.detailFile=this.paginatedTableData[e],this.showdetailDialog=!0},handleTabClick(e){this.activeUrlTab=e.props.name},handleUrlClick(e){navigator.clipboard.writeText(e.target.value).then((()=>{this.$message({type:"success",message:"Sao chép thành công"})})).catch((()=>{this.$message({type:"error",message:"Sao chép thất bại"})}))},handleDetailDelete(e){this.$confirm("Thao tác này sẽ xóa vĩnh viễn tệp, bạn có muốn tiếp tục không?","Gợi ý",{confirmButtonText:"Xác nhận",cancelButtonText:"Hủy bỏ",type:"warning"}).then((()=>{this.fetchWithAuth(`/api/manage/delete/${e}`,{method:"GET"}).then((t=>{if(!t.ok)return Promise.reject("Yêu cầu thất bại");{const t=this.tableData.findIndex((t=>t.name===e));-1!==t&&this.tableData.splice(t,1)}})).then((()=>{this.updateStats(),this.$message.success("Xóa thành công!"),this.showdetailDialog=!1})).catch((()=>this.$message.error("Xóa thất bại, vui lòng kiểm tra kết nối mạng")))})).catch((()=>this.$message.info("Đã hủy xóa")))},handleBlock(e){this.$confirm("Thao tác này sẽ thêm tệp vào danh sách đen, bạn có muốn tiếp tục không?","Gợi ý",{confirmButtonText:"Xác nhận",cancelButtonText:"Hủy bỏ",type:"warning"}).then((()=>{this.fetchWithAuth(`/api/manage/block/${e}`,{method:"GET"}).then((t=>{if(!t.ok)return Promise.reject("Yêu cầu thất bại");{const t=this.tableData.findIndex((t=>t.name===e));-1!==t&&(this.tableData[t].metadata.ListType="Block")}})).then((()=>{this.$message.success("Thêm vào danh sách đen thành công!")})).catch((()=>this.$message.error("Thêm vào danh sách đen thất bại, vui lòng kiểm tra kết nối mạng")))})).catch((()=>console.log("Đã hủy thêm vào danh sách đen")))},handleWhite(e){this.$confirm("Thao tác này sẽ thêm tệp vào danh sách trắng, bạn có muốn tiếp tục không?","Gợi ý",{confirmButtonText:"Xác nhận",cancelButtonText:"Hủy bỏ",type:"warning"}).then((()=>{this.fetchWithAuth(`/api/manage/white/${e}`,{method:"GET"}).then((t=>{if(!t.ok)return Promise.reject("Yêu cầu thất bại");{const t=this.tableData.findIndex((t=>t.name===e));-1!==t&&(this.tableData[t].metadata.ListType="White")}})).then((()=>{this.$message.success("Thêm vào danh sách trắng thành công!")})).catch((()=>this.$message.error("Thêm vào danh sách trắng thất bại, vui lòng kiểm tra kết nối mạng")))})).catch((()=>console.log("Đã hủy thêm vào danh sách trắng")))},async fetchWithAuth(e,t={}){this.credentials&&(t.headers={...t.headers,Authorization:`Basic ${this.credentials}`},t.credentials="include");const a=await fetch(e,t);if(401===a.status)throw this.$message.error("Lỗi trạng thái xác thực, vui lòng đăng nhập lại"),this.$router.push("/adminLogin"),new Error("Unauthorized");return a},handleDelete(e,t){this.$confirm("Thao tác này sẽ xóa vĩnh viễn tệp, bạn có muốn tiếp tục không?","Gợi ý",{confirmButtonText:"Xác nhận",cancelButtonText:"Hủy bỏ",type:"warning"}).then((()=>{this.fetchWithAuth(`/api/manage/delete/${t}`,{method:"GET"}).then((e=>{if(!e.ok)return Promise.reject("Yêu cầu thất bại");{const e=this.tableData.findIndex((e=>e.name===t));-1!==e&&this.tableData.splice(e,1)}})).then((()=>{this.updateStats(),this.$message.success("Xóa thành công!")})).catch((()=>this.$message.error("Xóa thất bại, vui lòng kiểm tra kết nối mạng")))})).catch((()=>this.$message.info("Đã hủy xóa")))},handleBatchDelete(){this.$confirm("Thao tác này sẽ xóa vĩnh viễn các tệp đã chọn, bạn có muốn tiếp tục không?","Gợi ý",{confirmButtonText:"Xác nhận",cancelButtonText:"Hủy bỏ",type:"warning"}).then((()=>{const e=this.selectedFiles.map((e=>this.fetchWithAuth(`/api/manage/delete/${e.name}`,{method:"GET"})));Promise.all(e).then((e=>{e.forEach(((e,t)=>{if(e.ok){const e=this.tableData.findIndex((e=>e.name===this.selectedFiles[t].name));-1!==e&&this.tableData.splice(e,1)}})),this.selectedFiles=[],this.updateStats(),this.$message.success("Xóa hàng loạt thành công!")})).catch((()=>this.$message.error("Xóa hàng loạt thất bại, vui lòng kiểm tra kết nối mạng")))})).catch((()=>this.$message.info("Đã hủy xóa hàng loạt")))},handleBatchCopy(){const e=this.selectedFiles.map((e=>`${document.location.origin}/file/${e.name}`)).join("\n");navigator.clipboard?navigator.clipboard.writeText(e).then((()=>this.$message.success("Sao chép hàng loạt liên kết thành công~"))):this.copyToClipboardFallback(e)},copyToClipboardFallback(e){const t=document.createElement("textarea");document.body.appendChild(t),t.style.position="fixed",t.style.clip="rect(0 0 0 0)",t.style.top="10px",t.value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t),this.$message.success("Sao chép hàng loạt liên kết thành công~")},handleGoUpload(){this.$router.push("/")},handleGoToAdmin(){this.$router.push("/customerConfig")},handleCopy(e,t){const a=`${document.location.origin}/file/${t}`;navigator.clipboard?navigator.clipboard.writeText(a).then((()=>this.$message.success("Sao chép liên kết tệp thành công~"))):this.copyToClipboardFallback(a)},handlePageChange(e){this.currentPage=e},updateStats(){this.Number=this.tableData.length},sort(e){this.sortOption=e},sortData(e){return"nameAsc"===this.sortOption?e.sort(((e,t)=>e.name.localeCompare(t.name))):e.sort(((e,t)=>t.metadata.TimeStamp-e.metadata.TimeStamp))},handleVideoClick(e){const t=e.target;t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen()},handleLogout(){this.$store.commit("setCredentials",null),this.$router.push("/adminLogin")},toggleSelectAll(){this.allSelected=!this.allSelected}},mounted(){this.fetchWithAuth("/api/manage/check",{method:"GET"}).then((e=>e.text())).then((e=>{if("true"==e)return this.showLogoutButton=!0,this.fetchWithAuth("/api/manage/list",{method:"GET"});if("Not using basic auth."==e)return this.fetchWithAuth("/api/manage/list",{method:"GET"});throw new Error("Unauthorized")})).then((e=>e.json())).then((e=>{this.tableData=e.map((e=>({...e,selected:!1}))),this.updateStats();const t=localStorage.getItem("sortOption");t&&(this.sortOption=t),this.sortData(this.tableData)})).catch((e=>{"Unauthorized"!==e.message&&this.$message.error("Lỗi khi đồng bộ hóa dữ liệu, vui lòng kiểm tra kết nối mạng")}))}},z=a(1241);const I=(0,z.A)(X,[["render",V],["__scopeId","data-v-50b7ea38"]]);var E=I},8050:function(e,t,a){a(5331)},5385:function(e,t,a){a(5331)},8736:function(e,t,a){a(5331)},5616:function(e,t,a){a(5331),a(7197)},3597:function(e,t,a){a(5331)},8830:function(e,t,a){a(5331)},6055:function(e,t,a){a(5331),a(9648),a(8050),a(9104),a(5970)},7128:function(e,t,a){a(5331),a(4318)},8450:function(e,t,a){a(5331)},9104:function(e,t,a){a(5331)},5970:function(e,t,a){a(5331)},8785:function(e,t,a){a(5331)},213:function(e,t,a){a(5331),a(9104)}}]);
//# sourceMappingURL=11.8cd46bff.js.map