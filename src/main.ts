import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";



export interface II18nPromotionContent {
    'en'?: string
    'th'?: string
    'ja'?: string
    'ko'?: string
    'zh-Hans': string
    'zh-Hant'?: string
}

export type PromotionFormat = 'markdown' | 'html' | 'text'

export interface II18nPromotionContentItem {
    content: II18nPromotionContent
    format: PromotionFormat
    fallback_language: keyof II18nPromotionContent
}

export interface IPromotionItem {
    id: string
    promotion: II18nPromotionContentItem
    disclaimer: II18nPromotionContentItem
    configuration_doc_link?: string
    started_at?: string
    ended_at?: string
    version_constraint?: string
    can_never_display?: boolean
}

export interface IPromotionResponse {
    openai_api_key?: IPromotionItem[]
    settings_header?: IPromotionItem[]
}


async function fetchPromotions(): Promise<IPromotionResponse> {
    const resp = await fetch(
        `https://raw.githubusercontent.com/yetone/openai-translator-configs/main/promotions.json?ts=${Date.now()}`,
        { cache: 'no-cache' }
    )
    if (!resp.ok) {
        throw new Error(resp.statusText)
    }
    return resp.json()
}

fetchPromotions().then((promotions) => { console.log(promotions) })
createApp(App).mount("#app");
