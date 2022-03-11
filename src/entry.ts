import './scss/main.scss'

const init = () => {
  console.log('start...');

  // 定数
  const C_NEWS = 'news'
  // 初期値
  let mode = C_NEWS // news or press
  const contentsNames = ['first', 'second']

  // イベント設定
  const targetTabs = document.querySelectorAll('.tab-target')
  const targetUl = document.querySelector('.inner-contents ul')

  // チェック
  if (targetTabs[0] != null && targetTabs[1] != null && targetUl != null) {

    // 関数定義
    // クラス削除メソッド（タブ用）
    const deleteClass = () => {
      targetTabs.forEach(v => {
        v.classList.remove('active')
      })
    }
    // クラス削除メソッド（コンテンツ用）
    const deleteClassViaContents = () => {
      targetUl.classList.remove(...contentsNames)
    }
    // クラス全消し用
    const deleteAllClass = () => {
      deleteClass()
      deleteClassViaContents()
    }

    // 最初に全てのクラスを削除
    deleteAllClass()

    // 初期設定
    const targetNumber = mode !== C_NEWS ? 1 : 0
    const str = mode !== C_NEWS ? contentsNames[1] : contentsNames[0]
    targetTabs[targetNumber].classList.add('active')
    targetUl.classList.add(str)

    // クリックイベント登録
    targetTabs.forEach((v, index) => {
      v.addEventListener('click', () => {
        deleteAllClass()
        const str = index === 0 ? contentsNames[0] : contentsNames[1]
        v.classList.add('active')
        targetUl.classList.add(str)
      })
    })
  }
}

window.addEventListener('DOMContentLoaded', init)